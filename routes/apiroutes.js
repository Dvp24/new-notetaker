var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/add", function(req, res) {
  connection.query("SELECT * FROM note WHERE isEmpty = FALSE", function(err, dbTables) {
    res.json(dbTables);
  });
});


module.exports = router;
