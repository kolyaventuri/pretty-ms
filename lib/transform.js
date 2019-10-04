'use strict';
const transform = input => {
	const result = input;

	return result.filter(d => d && d.value !== 0);
};

module.exports = transform;
