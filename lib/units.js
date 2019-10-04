'use strict';
const pluralize = (word, count) => count === 1 ? word : word + 's';

const units = {
	NANOSECONDS: 'nanoseconds',
	MICROSECONDS: 'microseconds',
	MILLISECONDS: 'milliseconds',
	SECONDS: 'seconds',
	MINUTES: 'minutes',
	HOURS: 'hours',
	DAYS: 'days',
	YEARS: 'years'
};

const unitMap = {
	[units.NANOSECONDS]: {short: 'ns', long: 'nanosecond'},
	[units.MICROSECONDS]: {short: 'µs', long: 'microsecond'},
	[units.MILLISECONDS]: {short: 'ms', long: 'millisecond'},
	[units.SECONDS]: {short: 's', long: 'second'},
	[units.MINUTES]: {short: 'm', long: 'minute'},
	[units.HOURS]: {short: 'h', long: 'hour'},
	[units.DAYS]: {short: 'd', long: 'day'},
	[units.YEARS]: {short: 'y', long: 'year'}
};

const getNumberWithUnit = (number, unit, {verbose} = {verbose: false}) => {
	const {long: longName, short} = unitMap[unit];
	const long = pluralize(longName, number);

	return number + (verbose ? ` ${long}` : short);
};

module.exports = {
	units,
	getNumberWithUnit
};
