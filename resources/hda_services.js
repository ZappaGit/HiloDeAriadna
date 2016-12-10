var router = require('express').Router(),
    //db = require('../utils/persistence'),
    //commanders = require('../utils/commanders'),
    //editors = require('../utils/editors'),
    //logger = require('../utils/logger').general,
    //mainConfig = require('../config/main');


////////////// EXPOSED API //////////////

router.get('/services', getServices);
router.post('/services', newService);
router.get('/services/:serviceName', getService);
router.delete('/services/:serviceName', deleteService);
router.get('/services/:serviceName/files', getServiceFiles);
router.post('/services/:serviceName/files', newServiceFile);
router.get('/services/:serviceName/files/:fileName', readServiceFile);

module.exports = router;
