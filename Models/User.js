const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../dbconnect");

const User = sequelize.define("example_form", {
    userid:{
        type: DataTypes.UUID,
  defaultValue: Sequelize.UUIDV4 ,
  primaryKey: true
    },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

(async function(){
try{
    await User.sync();
    console.log("User table created");
}
catch(err){
    console.log(err);
}
})()
module.exports = User;