
const Kpi = {
	getKpi(name) {
		return _generatekpi(name);
	}
};

function _generatekpi(name) {
	return [
		{ code: 131188, kpi_name: 'TotalOfSales', current_value: 77, last_value: 77 },
		{ code: 131188, kpi_name: 'TotalOfLandingPages', current_value: 6, last_value: 2 },
		{ code: 131188, kpi_name: 'TotalOfEmailCampaingCurrentMonth', current_value: 4, last_value: 0 },
	];
};

module.exports = Kpi;