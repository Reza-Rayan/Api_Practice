const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello Home Page");
})
router.get("/about", (req, res) => {
    res.send("Hello About Page");
})


module.exports = router