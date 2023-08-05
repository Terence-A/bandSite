const router = require("express").Router();

const vManagerRoutes = require("./v-manager-routes");
const bandRoutes = require("./band-routes");

router.use("/bands", bandRoutes);
router.use("/vManager", vManagerRoutes);

module.exports = router;
