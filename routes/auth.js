const router = require("express").Router();
const Auth = require("../models/auth");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


router.get("/verifytoken", (req, res) => {
  
});



module.exports = router;
