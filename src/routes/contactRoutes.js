const express = require("express");
const router = express.Router();

const {
  submitContact,
} = require("../controllers/contactController");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Contact API Working",
  });
});

router.post("/", submitContact);

module.exports = router;