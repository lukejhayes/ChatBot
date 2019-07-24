module.exports = function (sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: Sequelize.STRING,
    slope: Sequelize.INTEGER,
    handicap: Sequelize.INTEGER,
    address: Sequelize.STRING,
    // zipcode: Sequelize.INTEGER,
  });
});
return Course;
};
