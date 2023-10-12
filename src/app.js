
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: 'null',
      methods: ["GET", "POST"]
    }
  });
  

const DataModel = require('./models/datamodel'); // Importa el modelo de datos
const buildXML = require('./models/xmlBuilder'); // Importa el generador de XML

// Configura Express
app.use(express.json());

// Ruta para obtener todos los datos
app.get('/api/data', (req, res) => {
    DataModel.getAllDataN((err, data) => {
      if (err) {
        console.error('Error al obtener datos:', err);
        res.status(500).json({ error: 'Error al obtener datos' });
      } else {
        // Aquí puedes usar 'data' para trabajar con los datos recuperados
        const updatedXML = buildXML(data); // Utiliza el generador de XML aquí
        
        // Emitir la actualización a través de Socket.io
        io.emit('updateXML', updatedXML);
      }
    });
  });


// Configura Socket.io para la comunicación en tiempo real
io.on('connection', (socket) => {
    console.log('Cliente conectado');
  
    // Enviar actualización del archivo XML cuando cambian los datos en la base de datos
    DataModel.getAllDataN((err, data) => {
      if (err) {
        console.error('Error al obtener datos:', err);
      } else {
        const updatedXML = buildXML(data);
        console.log(updatedXML);
        socket.emit('updateXML', updatedXML);
      }
    });
  });


const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
