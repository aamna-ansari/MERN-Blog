const { Router } = require("express");
const User = require('../models/user');

const router = Router();

// Get request for SignIn
router.get("/signin", (req, res) => {
  return res.render("signin");
});

// Get request for SignUp
router.get("/signup", (req, res) => {
  return res.render("signup");
});

// POST request for signUp
router.post("/signup", async(req, res) => {
    const{fullName, email, password} = req.body;
    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect('/');
  });

module.exports = router;
