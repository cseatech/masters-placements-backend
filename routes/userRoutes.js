const express = require("express");
const { loginAdmin, registerAdmin } = require("../controllers/userControllers.js");
const router = express.Router();

router.post("/login-admin", loginAdmin);
router.post("/register-admin", registerAdmin);

module.exports = router;