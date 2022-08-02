const express = require("express");

const DestinyController = require("../controllers/DestinyController");

const router = express.Router();

router.get("/", DestinyController.findDestiny);

router.post("/", DestinyController.addDestiny);

router.get("/:id", DestinyController.findDestinyById);

router.patch("/:id", DestinyController.updateDestinyById);

router.delete("/:id", DestinyController.deleteDestinyById);

router.delete("/:id/softdelete", DestinyController.softeDeleteDestiny);

module.exports = router;
