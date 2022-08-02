const express = require("express");

const OriginController = require("../controllers/OrigenController");

const router = express.Router();

router.get("/", OriginController.findOrigins);

router.post("/", OriginController.addOrigin);

router.get("/:id", OriginController.findOriginByid);

router.patch("/:id", OriginController.updateOriginById);

router.delete("/:id", OriginController.deleteOriginById);

router.delete("/:id/softdelete", OriginController.softDeleteOriginById);
module.exports = router;
