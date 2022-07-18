const express = require("express");
const AdminController = require("../controllers/AdminController");
/*

cual seria la menor manera para obtener los admin de todos los usuarios, y como se podrian pasar de una tabla a otra? ??JOIN??

*/

const router = express.Router();

router.get("/", AdminController.findAllAdmins);

router.post("/", AdminController.createAdmin);

module.exports = router;
