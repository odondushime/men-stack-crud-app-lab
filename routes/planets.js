const express = require("express");
const Planet = require("../models/Planet");
const { ensureAuthenticated } = require("../middleware/auth");
const router = express.Router();

// List Planets
router.get("/", ensureAuthenticated, async (req, res) => {
  const planets = await Planet.find({ createdBy: req.session.user.id });
  res.render("planets/index", { planets });
});

// New Planet Form
router.get("/new", ensureAuthenticated, (req, res) =>
  res.render("planets/new")
);

// Create Planet
router.post("/", ensureAuthenticated, async (req, res) => {
  const { name, size, description } = req.body;
  const planet = new Planet({
    name,
    size,
    description,
    createdBy: req.session.user.id,
  });
  await planet.save();
  res.redirect("/planets");
});

// Edit Planet Form
router.get("/:id/edit", ensureAuthenticated, async (req, res) => {
  const planet = await Planet.findById(req.params.id);
  if (planet.createdBy.toString() !== req.session.user.id)
    return res.redirect("/planets");
  res.render("planets/edit", { planet });
});

// Update Planet
router.post("/:id", ensureAuthenticated, async (req, res) => {
  const { name, size, description } = req.body;
  const planet = await Planet.findById(req.params.id);
  if (planet.createdBy.toString() !== req.session.user.id)
    return res.redirect("/planets");
  planet.name = name;
  planet.size = size;
  planet.description = description;
  await planet.save();
  res.redirect("/planets");
});

// Delete Planet
router.post("/:id/delete", ensureAuthenticated, async (req, res) => {
  const planet = await Planet.findById(req.params.id);
  if (planet.createdBy.toString() !== req.session.user.id)
    return res.redirect("/planets");
  await planet.delete();
  res.redirect("/planets");
});

module.exports = router;
