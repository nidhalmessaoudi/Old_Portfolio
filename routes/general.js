const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Check your Entry, no name specified!"]
    },
    email: {
      type: String,
      required: [true, "Please Check your Entry, no email specified!"]
    },
    subject: {
      type: String
    },
    message: {
      type: String,
      required: [true, "Please Check your Entry, no message specified!"]
    },
});
  
const Contact = mongoose.model("contact", contactSchema);
  
router.get("/", (req, res) => {
      res.render("home");
});
  
router.post("/", (req, res) => {
    const name = req.body.hisname;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.hismessage;
  
    const contact = new Contact({
      name: name,
      email: email,
      subject: subject,
      message: message    
    });
  
    contact.save(function (err) {
      if (err) {
        res.render("failure");
      } else {
        res.render("success");
      }
    });
});

module.exports = router;