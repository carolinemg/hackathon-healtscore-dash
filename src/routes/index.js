var express = require('express');
var router = express.Router();
const KpiController = require('../controllers/KpiController');


console.log('router ====> ', router)

/* GET home page. */
router.get('/', KpiController.find);

module.exports = router;
