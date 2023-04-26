const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "nodecomplete", {
  dialect: "mysl",
  host: "localhost",
});

module.exports = sequelize;
