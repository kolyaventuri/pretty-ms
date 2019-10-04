import test from 'ava';
import {units} from '../lib/units';
import parse from '../lib/parse';

const {
	YEARS,
	DAYS,
	HOURS,
	MINUTES,
	SECONDS,
	MILLISECONDS,
	MICROSECONDS,
	NANOSECONDS
} = units;

test('transforms the output of parseMs', t => {
	const result = parse(48910000291.5265);
	const expected = [
		{unit: YEARS, value: 1},
		{unit: DAYS, value: 201},
		{unit: HOURS, value: 2},
		{unit: MINUTES, value: 6},
		{unit: SECONDS, value: 40},
		{unit: MILLISECONDS, value: 291},
		{unit: MICROSECONDS, value: 526},
		{unit: NANOSECONDS, value: 496}
	];

	t.deepEqual(result, expected);
});

test('throws out values equal to 0', t => {
	const result = parse(17699);
	const expected = [
		{unit: SECONDS, value: 17},
		{unit: MILLISECONDS, value: 699}
	];

	t.deepEqual(result, expected);
});
