const pool = require('./pool');

async function insertUser(first_name, last_name, username, password, membership_status){
  await pool.query("insert into users (first_name, last_name, username, password, membership_status) values ($1, $2, $3, $4, $5)", [first_name, last_name, username, password, membership_status]);
}

module.exports = {insertUser};
