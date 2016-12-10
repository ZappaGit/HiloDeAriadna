var router = require('express').Router();
    //db = require('../utils/persistence'),
    //commanders = require('../utils/commanders'),
    //editors = require('../utils/editors'),
    //logger = require('../utils/logger').general,
    //mainConfig = require('../config/main');
var hda = require('../controllers/hdacontroller');
var errors = require('../controllers/errors');



////////////// EXPOSED API //////////////

router.get('/services', hda.saludo, getServices);
  // Muestra las tareas pendientes, noten que no llama al middleware
  // contarPendientes porque la cuenta ya la hace buscarPendientes
  //app.get('pendientes', [_.partial(setearVista, 'pendientes', buscarPendientes, imprimirLista)]);
  //app.get('/saludo', hda.saludo);
  //app.get('/despedida', hda.despedida);
  //app.get('/', hda.ini);
  //errors(app);

module.exports = router;


//router.post('/services', newService);
//router.get('/services/:serviceName', getService);
//router.delete('/services/:serviceName', deleteService);
//router.get('/services/:serviceName/files', getServiceFiles);
//router.post('/services/:serviceName/files', newServiceFile);
//router.get('/services/:serviceName/files/:fileName', readServiceFile);

function getServices(req, res, next) {
  console.log("getServices");
}

function getService(req, res, next) {
    req.checkParams('serviceName').len(3, 30);
    console.log("getServices");
}
