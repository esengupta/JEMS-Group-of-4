module.exports = function(sequelize, DataTypes) {
  var BucketLists = sequelize.define("BucketLists", {
    user_id: {
      type: DataTypes.INT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
    goal: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    public_flag: {
        type: DataTypes.Boolean,
        defaultValue: true
    },
    write_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    del_flag: {
        type: DataTypes.Boolean,
        defaultValue: false
    }
  });
  return BucketLists;
};
