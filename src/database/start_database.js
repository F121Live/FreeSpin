// Create a start function for a MySQL database connection using parameters from config
function StartDatabase(config) {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port: config.DB_PORT
  });
  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database, please check your config file.' + err.stack);
      return;
    }
    console.log('Connected to the MySQL Database as id ' + connection.threadId);
  });
  return connection;
}

module.exports= {
    StartDatabase
}
