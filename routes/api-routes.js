
// all we are doing is a GET for the golf courses

module.exports = function (app) {

  // GET route for getting all of the golf courses
  app.get("/api/courses", function (req, res) {
    // findAll returns All entries for a table when used with no options
    db.Course.findAll({}).then(function (golf_db) {
      // We have access to the courses as an argument inside of the callback function
      res.json(golf_db);   //  render or json?
    });
  });


};
