const express = require('express');
const {Sequelize}=require( 'sequelize');
const app=express();
const sequelize = new Sequelize('crud_app', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  global.sequelize=sequelize;
const  dbconnect=async()=>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

module.exports = {dbconnect,sequelize};