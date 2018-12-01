const User = require("../models/authSchema");
const JWT = require("jwt-simple");
const jsonToken = require("jsonwebtoken");
const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const confirmTemplate = require("../services/confirmEmailTemplate");
sgMail.setApiKey(keys.SENDGRID_KEY);

function userToken(user) {
  const timestamp = new Date().getTime();
  return JWT.encode({ id: user._id, iat: timestamp }, keys.JWT_SECRET);
}

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const refBy = req.body.refBy;
  
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  await User.findOne({ username: email }, async (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.status(422).send({ error: "This email is in use" });
    }

    const id = crypto.randomBytes(16).toString("hex");
    const refCode = crypto.randomBytes(6).toString("hex");

    const newUser = User({
      _id: id,
      username: email,
      password: password,
      referral_code: refCode,
      referred_by: refBy
    });

    await newUser.save(err => {
      if (err) {
        return next(err);
      }

      const emailJWT = jsonToken.sign({ id: newUser._id }, keys.EMAIL_SECRET, {
        expiresIn: "1d"
      });
      
      const isRef = refBy ? `${refBy}` : '';

      const url = `http://localhost:5000/confirmation/${emailJWT}/${isRef}`;

      const msg = {
        to: email,
        from: "lzvikas1@gmail.com",
        subject: "Confirm Your Email",
        text: "and easy to do anywhere, even with Node.js",
        html: confirmTemplate(url)
      };
      sgMail.send(msg);
      res.json({ token: userToken(newUser) });
    });
  });
};

exports.signin = async (req, res, next) => {
  await User.findById({ _id: req.user.id }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(422).send({ error: "User was not found" });
    }

    if (!user.confirmed) {
      return res.status(401).send({ error: "Please confirm your account" });
    }

    res.json({ token: userToken(req.user), refCode: user.referral_code });
  });
};

exports.googleToken = (req, res) => {
  const jwt = userToken(req.user);
  const htmlWithEmbeddedJWT = `
    <html>
      <script>
        // Save JWT to localStorage
        window.localStorage.setItem('token', '${jwt}');
        // Redirect browser to root of application
        window.location.href = '/about';
      </script>
    </html>
    `;

  res.send(htmlWithEmbeddedJWT);
};
