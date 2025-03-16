const pool = require('./pool');

async function insertUser(first_name, last_name, username, password, membership_status){
  await pool.query("INSERT INTO users (first_name, last_name, username, password, membership_status) values ($1, $2, $3, $4, $5)", [first_name, last_name, username, password, membership_status]);
}

async function updateMembership(membership_status, id){
  await pool.query("UPDATE users SET membership_status = $1 WHERE ", [membership_status])
}

module.exports = {insertUser, updateMembership};
