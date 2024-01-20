const express = require("express");
const { LoginController, RegisterController } = require("../controllers/auth.controller");
const router = express.Router();



router.post("/login",LoginController);
router.post("/register",RegisterController);


module.exports = {
    router
}