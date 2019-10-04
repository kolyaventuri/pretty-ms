'use strict';
const parse = require('./parse');
const transform = require('./transform');
const convertToString = require('./convert-to-string');

const prettyMs = (milliseconds, opts = {}) => {
	const parsed = parse(milliseconds);
	const result = transform(parsed, opts);

	return convertToString(result, opts);
};

module.exports = prettyMs;
