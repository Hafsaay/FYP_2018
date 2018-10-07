const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Contact model
const Contact = require("../../models/Contact");

// Validation
const validateContactInput = require("../../validation/contact");

// @route   GET api/contact/test
// @desc    Tests contact route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Contact Works" }));

// @route   GET api/contact/all
// @desc    Get all contacts
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Contact.find()
    .populate("contact", ["name", "email", "text"])
    .then(contact => {
      if (!contact) {
        errors.nocontact = "There are no contacts";
        return res.status(404).json(errors);
      }

      res.json(contact);
    })
    .catch(err => res.status(404).json({ contact: "There are no contacts" }));
});

// @route   POST api/contact
// @desc    Send contact
// @access  Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);

  // Check Validation
  if (!isValid) {
    // If any errors, send 400 with errors object
    return res.status(400).json(errors);
  }

  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text
  });

  newContact.save().then(contact => res.json(contact));
});

// // @route   GET api/contact
// // @desc    Get contacts
// // @access  Public
// router.get("/", (req, res) => {
//   Contact.find()
//     .sort({ date: -1 })
//     .then(contact => res.json(contact))
//     .catch(err => res.status(404).json({ nopostsfound: "No Contact Yet" }));
// });

module.exports = router;
