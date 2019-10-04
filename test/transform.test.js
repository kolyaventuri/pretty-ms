import test from 'ava';
import transform from '../lib/transform';
import {units} from '../lib/units';

const {
	MINUTES,
	SECONDS,
	MILLISECONDS
} = units;

test('throws out values equal to 0', t => {
	const result = transform([
		{unit: MINUTES, value: 17},
		{unit: SECONDS, value: 0},
		{unit: MILLISECONDS, value: 699}
	]);
	const expected = [
		{unit: MINUTES, value: 17},
		{unit: MILLISECONDS, value: 699}
	];

	t.deepEqual(result, expected);
});
