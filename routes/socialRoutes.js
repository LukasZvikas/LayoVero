module.exports = app => {
  app.get("https://www.instagram.com/lukas_zvikas/", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
  });
};
