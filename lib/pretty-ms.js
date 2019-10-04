'use strict';
const parseMilliseconds = require('parse-ms');
const parseFor = require('./parse-for');
const convertToString = require('./convert-to-string');

const prettyMs = (milliseconds, opts = {}) => {
	const parsed = parseMilliseconds(milliseconds);

	const large = parseFor(parsed, ['years', 'days', 'hours', 'minutes']);
	const small = parseFor(parsed, ['milliseconds', 'microseconds', 'nanoseconds']);

	const result = [...large, ...small];

	return convertToString(opts, result);
};

module.exports = prettyMs;
