const express = require('express');
const router = express();

const { registerAdmin, loginAdmin } = require("../../controllers/admin_controller.js");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

module.exports = router;