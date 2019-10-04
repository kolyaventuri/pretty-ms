'use strict';
const parseMilliseconds = require('parse-ms');
const parseFor = require('./parse-for');
const convertToString = require('./convert-to-string');

const prettyMs = (milliseconds, opts = {}) => {
	let result = [];
	const parsed = parseMilliseconds(milliseconds);

	const large = parseFor(parsed, ['years', 'days', 'hours', 'minutes']);

	result = large ? result.concat(large) : result;

	return convertToString(opts, result);
};

module.exports = prettyMs;
