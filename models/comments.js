module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    bucket_id: {
      type: DataTypes.INT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
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
  return Comments;
};
