const db = require('./database'); // Importa la configuración de la conexión a MySQL

const DataModel = {
    getAllDataN: (callback) => {
      // Realiza la consulta a la base de datos
      db.query('SELECT * FROM nintendo', (error, results) => {
        if (error) {
          // Si se produce un error, llama al callback con el error como primer argumento
          callback(error, null);
        } else {
          // Si no hay error, llama al callback con los resultados como segundo argumento
          callback(null, results);
        }
      });
    },
    getAllDataS: (callback) => {
      // Realiza la consulta a la base de datos
      db.query('SELECT * FROM playstation', (error, results) => {
        if (error) {
          // Si se produce un error, llama al callback con el error como primer argumento
          callback(error, null);
        } else {
          // Si no hay error, llama al callback con los resultados como segundo argumento
          callback(null, results);
        }
      });
    },
    // Agrega más métodos para realizar operaciones CRUD según tus necesidades
  };

module.exports = DataModel;