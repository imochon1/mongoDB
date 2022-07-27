const express = require("express");

const OriginController = require("../controllers/OrigenController");

const router = express.Router();

router.get("/", OriginController.findOrigins);

router.post("/", OriginController.addOrigin);

module.exports = router;
