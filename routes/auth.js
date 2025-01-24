const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// Register Page
router.get("/register", (req, res) => res.render("register"));

// Handle Registration
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, passwordHash: password });
    await user.save();
    req.session.user = { id: user._id, email: user.email };
    res.redirect("/planets");
  } catch (error) {
    console.error("Registration error:", error);
    res.redirect("/auth/register");
  }
});

// Login Page
router.get("/login", (req, res) => res.render("login"));

// Handle Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.passwordHash))) {
    req.session.user = { id: user._id, email: user.email };
    res.redirect("/planets");
  } else {
    res.redirect("/auth/login");
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});

module.exports = router;
