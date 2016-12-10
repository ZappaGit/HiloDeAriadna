//Hilo de ariadna app
var express = require('express');
var exphbs  = require('express-handlebars');
var router =  require('./config/routes');
//var mongoose = require('mongoose');

var app = express();


//HDA own logic
var mainConfig = require('./config/main');
    //logger = require('./utils/logger'),
    //persistence = require('./utils/persistence'),
    //scheduler = require('./utils/scheduler'),
    //broadcaster = require('./utils/broadcaster'),
    
function logMiddleware (req, res, next) {
  console.log('la url que nos pidio: ',req.url);
  next();
}


app.set('port', (process.env.PORT || 5000));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
console.log(app.get('view engine'));
app.use(logMiddleware);
app.use(express.static('public'));


//if (!router) {
  // debug('no routes defined on app');
  // done();
  // return;
//}

//router(app);



app.listen(app.get('port'), function() {
  console.log("working in hda layouts");
  console.log("HOla heroku");
  console.log('Node app is running on port', app.get('port'));
});


//mongoose.set('debug', true);
//mongoose.connect('mongodb://localhost/hilodeariadna', function (err) {
    ////  if (err){
    //console.log("error conectando a la BD");
  //  throw err;
  //}

//  var app = express();

//  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//  app.set('view engine', 'handlebars');
//  console.log(app.get('view engine'));
//  app.use(logMiddleware);
//  app.use(express.static('public'));

//  if (!router) {
//    debug('no routes defined on app');
//    done();
//    return;
//  }

//  router(app);

  // Decimos en que puerto queremos escuchar (el 8000)
//  app.listen(8000, function () {
//    console.log("Esperando requests en el puerto 8000");
//  });
//});
