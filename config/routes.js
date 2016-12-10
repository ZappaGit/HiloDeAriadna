var express = require('express');
var _       = require('lodash');

var errors = require('../controllers/errors')

//variable composiciones
var hda = require('../controllers/hdacontroller');
var mongoose = require('mongoose');


// Creo el modulo
//var modulo  = express.Router();

/**
 * Middleware que carga las tareas pendientes para un usuario y ya
 * que las tiene, las cuenta.
 */
function buscarPendientes (req, res, next) {
    hda.buscarPendientes(obtenerUsuarioId(req));
    //res.locals.pendientes = Object.keys(res.locals.tareas).length;
    next();
}


/*
 * Middleware que agrega el nombre de la vista a res.locals para el componente de navegacion.
 * Noten que no parece cumplir con la firma del middleware al tener un
 * primer parametro extra, pero vean que esta pensado para ser usado con _.partial
 * que basicamente te devuelve una nueva funcion con el primer parametro precargado
 */
function setearVista (vista, req, res, next) {
    console.log("routes.js: setervista");
    //res.locals.view = vista;
    next();
}


/**
 * Middleware que imprime las tareas pendientes para un usuario y ya
 * que las tiene, las cuenta.
 */
function imprimirLista (req, res, next) {
    console.log("routes.js: imprimirLista")
    next();
}


//module.get('/pendientes', [
//  _.partial(setearVista, 'pendientes'),
    //buscarPendientes,
    //imprimirLista
//]);

module.exports = function(app) {
  // Muestra las tareas pendientes, noten que no llama al middleware
  // contarPendientes porque la cuenta ya la hace buscarPendientes
  app.get('pendientes', [_.partial(setearVista, 'pendientes', buscarPendientes, imprimirLista)]);
  app.get('/saludo', hda.saludo);
  app.get('/despedida', hda.despedida);
  app.get('/', hda.ini);
  errors(app);
};
