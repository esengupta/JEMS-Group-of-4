module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,16]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    write_date: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  return Users;
};
