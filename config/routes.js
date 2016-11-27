var errors = require('../controllers/errors')
var hda = require('../controllers/hdacontroller');
var mongoose = require('mongoose');



module.exports = function(app) {
  app.get('/saludo', hda.saludo);
  app.get('/despedida', hda.despedida);
  app.get('/', hda.ini);
  errors(app);
};
