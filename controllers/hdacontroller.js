// En este caso guardo mis tareas en memoria, en una aplicacion de verdad esto estaria en
// una base de datos. Pueden extender este ejemplo para usar una base de datos como
// mongo, mysql o un servicio como firebase
// https://www.firebase.com/
// Para evitar que distintos usuarios tengan las tareas mezcladas, el objeto de tareas
// tiene como indice al id del usuario y como valor a un mapa de id de tarea a tarea
//
// tareasPorUsuario = {
//   "id de usuario" : {
//      "tarea1" : new Tarea(),
//      "tarea2" : new Tarea()
//   }
// }
var  composiciones = {};

/**
 * Modelo de las tareas a ser completadas (TODO).
 * Este modelo esta inspirado en el concepto de Active Record https://es.wikipedia.org/wiki/Active_record
 * Noten que los metodos de instancia, que son unicos por cada tarea estan en el prototipo, mientras
 * que los metodos de clase estan directamente sobre la funcion.
 * @param string  id         El id de la tarea, null si se quiere que se autogenere
 * @param string  usuarioId  El id del usuario al que le pertenece  la tarea.
 * @param string  titulo     El titulo de la tarea.
 * @param boolean completada Si se completo o no.
 */
function buscarPendientes () {
  console.log("hdacontrolloer.js: composicion %0");
    // Si no me asignan un id lo creo aleatoriamente

}


function ini (req, res) {
  res.render('hda',{message: 'Hilo De Ariadna'});
}

function saludo (req, res) {
  console.log("hdacontroller.js: saludo")
  var nombre = req.query.nombre;
  res.render('hda',{message:'<h1>Hola</h1>'});
}

function despedida (req, res) {
  var nombre = req.query.nombre;
  res.render('hda',{message:'<h1>Chau ' + nombre + '</h1>'});
}

module.exports = {
  saludo: saludo,
  despedida: despedida,
  ini: ini,
  buscarPendientes: buscarPendientes
};
