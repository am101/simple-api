const express = require("express");
const router = express.Router();

const User = require("../Controllers/User");
// User = {
//   function: signup,
//   function: login,
//   function: account
// }

router.post("/signup", User.signup);
router.post("/login", User.login);
router.get("/account", User.account);

module.exports = router;
