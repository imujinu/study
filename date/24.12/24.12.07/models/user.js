const user = (sequelize,DataTypes) => {
    return sequelize.define(
        "user",
        {
          name: DataTypes.STRING,
          age: DataTypes.INTEGER,
        },
        {
          timestamps: false,
          freezeTableName: false,
        }
      );
}

module.exports = user