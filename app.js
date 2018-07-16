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
  console.log(files);
  files.map(file => {
    const newFile = file.slice(15);
    console.log("SLICED", file.slice(-5));
    // if(newFile())
    if (file.slice(-5) == "thumb") {
      return;
    } else {
      console.log("thumb" + newFile);
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

const PORT = process.env.PORT || 5000;

app.listen(PORT);
