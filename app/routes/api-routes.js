var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM buckets";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a bucket
  app.post("/api/new", function(req, res) {
    console.log("Bucket Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO buckets (category, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.category, req.body.body, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Goal Successfully Saved!");
      res.end();
    });
  });
};
