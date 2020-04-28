var express = require('express');
var router = express.Router();
const KpiController = require('../controllers/KpiController');

/* GET home page. */
router.get('/', KpiController.find);

module.exports = router;
