module.exports = function(sequelize, DataTypes) {
  var Milestones = sequelize.define("Milestones", {
    bucket_id: {
      type: DataTypes.INT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    },
    achieve_flag: {
        type: DataTypes.Boolean,
        defaultValue: false
    }
  });
  return Milestones;
};
