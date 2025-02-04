const express = require("express");
const userController = require("../controllers/userControllers");
const { verify } = require("jsonwebtoken");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/details",verify,userController.getDetails);


module.exports = router;