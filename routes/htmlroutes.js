var router = require("express").Router();
var path = require("path");

// Render tables.html at the "/tables" path
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/home.html"));
});


module.exports = router;
