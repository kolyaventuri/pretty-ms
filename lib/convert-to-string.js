'use strict';
const {units, getNumberWithUnit} = require('./units');

const convertToString = (opts, data) => {
	if (data.length === 0) {
		return getNumberWithUnit(0, units.MILLISECONDS, opts);
	}
};

module.exports = convertToString;
