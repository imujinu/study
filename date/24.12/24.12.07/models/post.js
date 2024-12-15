const post = (sequelize,DataTypes)=>{
    return sequelize.define("post", {
        title: DataTypes.STRING,
        content : DataTypes.TEXT,
      
      });
}

module.exports = post