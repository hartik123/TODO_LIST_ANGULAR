const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const getUserProfileController = require("../controllers/getUserProfileController");
const authenticateToken = require("../jwt-auth/tokenAuthentication").authenticateToken;

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getprofile", authenticateToken, getUserProfileController);

module.exports = router;