const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("bands", { pageTitle: "Bands" });
});

module.exports = router;
