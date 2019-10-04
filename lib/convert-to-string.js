'use strict';
const {units, getNumberWithUnit} = require('./units');

const convertToString = (data, opts = {}) => {
	if (data.length === 0) {
		return getNumberWithUnit(0, units.MILLISECONDS, opts);
	}

	const result = [];

	for (const {unit, value} of data) {
		const string = getNumberWithUnit(value, unit, opts);
		result.push(string);
	}

	if (opts.compact) {
		return `~${result[0]}`;
	}

	if (typeof opts.unitCount === 'number') {
		const truncated = result.slice(0, Math.max(opts.unitCount, 1)).join(' ');
		return `~${truncated}`;
	}

	return result.join(' ');
};

module.exports = convertToString;
