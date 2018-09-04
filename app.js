const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const passport = require("passport");
const glob = require("glob");
const sharp = require("sharp");

require("./services/regularAuth");
require("./services/googleAuth");

mongoose.connect(keys.MONGO_KEY);

const app = express();

glob("client/uploads/*", (err, files) => {
  files.map(file => {
    const newFile = file.slice(15);
    if (file.slice(-5) == "thumb") {
      return;
    } else {
      sharp(file)
        .resize(64, 48)
        .toFile("client/uploads/" + newFile + "thumb");
    }
  });
});

app.use(bodyParser.json());
app.use(passport.initialize());

require("./routes/authRoutes")(app);
require("./routes/socialRoutes")(app);
require("./routes/blogRoutes")(app);
require("./routes/routeRoutes")(app);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use('/client/build', express.static(path.resolve(__dirname, 'client/build')));
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, 'client/index.html'));
  });
 
  // app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log("Listening"));
