const Kpi = require('../models/Kpi');

const KpiController = {
  async find(req, res) {
    try {
			kpis = await Kpi.getKpi();
			
			
      
      res.render('index', { title: 'Express' });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = KpiController;
