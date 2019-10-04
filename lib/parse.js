'use strict';
const parseMs = require('parse-ms');
const {units} = require('./units');

const parse = milliseconds => {
	let preParsed = parseMs(milliseconds);

	const days = preParsed[units.DAYS];
	if (days >= 365) {
		const years = Math.trunc(days / 365);
		preParsed[units.DAYS] = days % 365;

		preParsed = {
			[units.YEARS]: years,
			...preParsed
		};
	}

	const result = [];
	const keys = Object.keys(preParsed);

	for (const unit of keys) {
		result.push({
			unit: units[unit.toUpperCase()],
			value: preParsed[unit]
		});
	}

	return result.filter(d => Boolean(d));
};

module.exports = parse;
