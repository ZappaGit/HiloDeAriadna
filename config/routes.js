var hda = require('../controllers/hdacontroller');

module.exports = function(app) {
  app.get('/saludo', hda.saludo);
  app.get('/despedida', hda.despedida);
  app.get('/', hda.ini);
};
