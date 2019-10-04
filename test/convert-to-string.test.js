import test from 'ava';
import convertToString from '../lib/convert-to-string';
import {units} from '../lib/units';

const {
	MILLISECONDS,
	SECONDS,
	MINUTES,
	HOURS
} = units;

test('returns 0ms if no data passed', t => {
	t.is(convertToString([]), '0ms');
});

test('returns properly formatted data', t => {
	const result = convertToString([
		{unit: SECONDS, value: 25},
		{unit: MILLISECONDS, value: 50}
	]);
	t.is(result, '25s 50ms');

	const result2 = convertToString([
		{unit: MINUTES, value: 1},
		{unit: SECONDS, value: 24}
	]);
	t.is(result2, '1m 24s');

	const result3 = convertToString([
		{unit: HOURS, value: 6},
		{unit: MINUTES, value: 30},
		{unit: SECONDS, value: 25}
	]);
	t.is(result3, '6h 30m 25s');
});

test('returns verbose data correctly', t => {
	const result = convertToString([
		{unit: HOURS, value: 6},
		{unit: MINUTES, value: 30},
		{unit: SECONDS, value: 25}
	], {verbose: true});

	t.is(result, '6 hours 30 minutes 25 seconds');
});

test('returns compacted data correctly', t => {
	const result = convertToString([
		{unit: HOURS, value: 6},
		{unit: MINUTES, value: 30},
		{unit: SECONDS, value: 25}
	], {compact: true});

	t.is(result, '~6h');
});

test('returns proper unit couts when provided', t => {
	const result = convertToString([
		{unit: HOURS, value: 6},
		{unit: MINUTES, value: 30},
		{unit: SECONDS, value: 25}
	], {unitCount: 2});

	t.is(result, '~6h 30m');
});
