var express = require('express');
var exphbs  = require('express-handlebars');
var router =  require('./config/routes');
var mongoose = require('mongoose');

function logMiddleware (req, res, next) {
  console.log('la url que nos pidio: ',req.url);
  next();
}

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/hilodeariadna', function (err) {
  if (err) throw err;

  var app = express();

  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');
  app.use(logMiddleware);
  app.use(express.static('public'));

  if (!router) {
    debug('no routes defined on app');
    done();
    return;
  }

  router(app);

  // Decimos en que puerto queremos escuchar (el 8000)
  app.listen(8000, function () {
    console.log("Esperando requests en el puerto 8000");
  });
});
