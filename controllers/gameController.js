const GameQuestions = require("../models/gameSchema");
const User = require("../models/authSchema");
const keys = require("../config/keys");
const JWT = require("jwt-simple");
const sgMail = require("@sendgrid/mail");
const referralTemplate = require("../services/referralTemplate");

const decodeToken = token => {
  const decoded = JWT.decode(token, keys.JWT_SECRET);
  return decoded;
};

exports.sendQuestions = async (req, res, next) => {
  const reqRound = req.body.round;
  await GameQuestions.find({ round: reqRound }, (err, arr) => {
    if (err) {
      return next(err);
    }
    res.send(arr);
  });
};

exports.saveScore = (req, res, next) => {
  const score = req.body.score;
  const token = req.body.token;
  const decoded = decodeToken(token);
  User.findByIdAndUpdate(
    decoded.id,
    { $inc: { points: score } },
    (err, user) => {
      if (err) {
        res.send({ message: "could not save points" });
      }
      res.send({ message: "points saved successfully" });
    }
  );
};

exports.sendReferralCode = (req, res, next) => {
  const token = req.body.token;
  const decoded = decodeToken(token);
  User.findById(decoded.id, (err, user) => {
    if (err) {
      res.send({ message: "user was not found" });
    }
    res.send({ message: user.referral_code });
  });
};

exports.sendEmails = (req, res, next) => {
  const refCode = req.body.refCode;
  const emails = req.body.emails;
  
  User.findOne({ referral_code: refCode }, (err, user) => {
    if (err) {
      return next(err);
    }
    const url = `localhost:8080/${refCode}`;
    emails.map(email => {
      const msg = {
        to: email,
        from: user.username,
        subject: `${email} invited you to join Layovero`,
        text: "Accept this invitation, please",
        html: referralTemplate(url)
      };
      sgMail.send(msg);
    });
  });
};
