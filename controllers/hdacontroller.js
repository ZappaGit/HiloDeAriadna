function ini (req, res) {
  res.render('hda',{message: 'Hilo De Ariadna'});
}

function saludo (req, res) {
  var nombre = req.query.nombre;
  res.send('<h1>Hola</h1>');
}

function despedida (req, res) {
  var nombre = req.query.nombre;
  res.send('<h1>Chau ' + nombre + '</h1>');
}

module.exports = {
  saludo: saludo,
  despedida: despedida,
  ini: ini,
};
