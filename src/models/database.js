const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'videogames',
  port: 3307,

});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL:', err);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }
});

module.exports = db;