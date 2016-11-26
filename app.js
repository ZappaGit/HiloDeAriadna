var express = require('express');
// Lo iniciamos
var app = express();

// Definimos la ruta principal
app.get('/', function (req, res) {
  // Obtenemos el nombre (no necesitamos el modulo url!)
  var nombre = req.query;
  res.send('<h1>' + 'Amor mio te quiero' + '</h1>');
});

// Decimos en que puerto queremos escuchar (el 8000)
app.listen(8000, function () {
  console.log("Esperando requests en el puerto 8000");
});
