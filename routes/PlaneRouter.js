const express = require("express");

const PlanesController = require("../controllers/PlanesController");

const router = express.Router();

router.get("/", PlanesController.findPlanes);

router.post("/", PlanesController.postPlane);

module.exports = router;
