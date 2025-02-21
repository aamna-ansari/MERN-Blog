const { Router } = require("express");

const router = Router();

// Get request for SignIn
router.get("/signin", (req, res) => {
  return res.render("signin");
});

// Get request for SignUp
router.get("/signup", (req, res) => {
  return res.render("signup");
});

module.exports = router;
