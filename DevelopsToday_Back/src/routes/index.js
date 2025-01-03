const { Router } = require("express");
const { countriesRoutes } = require("./countriesRoutes");

const router = Router();
router.use("/countries", countriesRoutes);

module.exports = router;
