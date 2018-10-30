var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connection = mysql.createConnection({
  host: 'http://127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

exports.connection.connect((err) => {
  if (err) {
    console.log('Error connecting');
    return;
  }

  console.log('Successfully connected!');
});