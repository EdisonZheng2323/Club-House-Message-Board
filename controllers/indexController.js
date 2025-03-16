const db = require('../db/queries');
const passport = require('passport');
const bcrypt = require('bcryptjs');

async function getHome(req, res){
  res.render("index");
}

async function getSignUp(req, res) {
  res.render("sign-up");
}

async function postSignUp(req, res){
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await db.insertUser(req.body.first_name, req.body.last_name, req.body.username, hashedPassword, false);
    res.redirect("/");
  } 
  catch (error) {
    console.error(error);
    next(error);
  }
}

async function getLogin(req, res){
  res.render("login");
}

module.exports = {getHome, getSignUp, postSignUp, getLogin};