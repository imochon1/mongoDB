const express = require("express");

const PlanesController = require("../controllers/PlanesController");

const router = express.Router();

router.get("/", PlanesController.findPlanes);

router.post("/", PlanesController.postPlane);

router.get("/:id", PlanesController.findPlaneById);

router.patch("/:id", PlanesController.updatePlaneById);

router.delete("/:id", PlanesController.deletePlaneById);

router.delete("/:id/softdelete", PlanesController.softDeletePlane);

//completar crud post put y delete seran privados

//validar que llegue el jwt y si no regresar error se agrega payload signature y header

module.exports = router;
