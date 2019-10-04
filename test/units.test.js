import test from 'ava';
import {units, getNumberWithUnit} from '../lib/units';

test('gets nanoseconds', t => {
	t.is(getNumberWithUnit(123, units.NANOSECONDS), '123ns');
	t.is(getNumberWithUnit(123, units.NANOSECONDS, {verbose: true}), '123 nanoseconds');
});

test('gets microseconds', t => {
	t.is(getNumberWithUnit(123, units.MICROSECONDS), '123µs');
	t.is(getNumberWithUnit(123, units.MICROSECONDS, {verbose: true}), '123 microseconds');
});

test('gets milliseconds', t => {
	t.is(getNumberWithUnit(123, units.MILLISECONDS), '123ms');
	t.is(getNumberWithUnit(123, units.MILLISECONDS, {verbose: true}), '123 milliseconds');
});

test('gets seconds', t => {
	t.is(getNumberWithUnit(59, units.SECONDS), '59s');
	t.is(getNumberWithUnit(59, units.SECONDS, {verbose: true}), '59 seconds');
});

test('gets minutes', t => {
	t.is(getNumberWithUnit(59, units.MINUTES), '59m');
	t.is(getNumberWithUnit(59, units.MINUTES, {verbose: true}), '59 minutes');
});

test('gets hours', t => {
	t.is(getNumberWithUnit(123, units.HOURS), '123h');
	t.is(getNumberWithUnit(123, units.HOURS, {verbose: true}), '123 hours');
});

test('gets days', t => {
	t.is(getNumberWithUnit(123, units.DAYS), '123d');
	t.is(getNumberWithUnit(123, units.DAYS, {verbose: true}), '123 days');
});

test('gets years', t => {
	t.is(getNumberWithUnit(123, units.YEARS), '123y');
	t.is(getNumberWithUnit(123, units.YEARS, {verbose: true}), '123 years');
});

test('is singular if the number is 1', t => {
	t.is(getNumberWithUnit(1, units.SECONDS), '1s');
	t.is(getNumberWithUnit(1, units.SECONDS, {verbose: true}), '1 second');
});
