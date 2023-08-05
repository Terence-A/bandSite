const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("vManager", { pageTitle: "Virtual Manager" });
});

module.exports = router;
