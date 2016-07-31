const test = require('tape');

// map - map a value from one range to another
const map = require('./range-map');

test('map()', function(t) {
	t.plan(1);

	const expected = 75;
	const res = map(5, {
		min: 0,
		max: 10
	}, {
		min: 50,
		max: 100
	});

	t.same(res, expected);
});

// hexMix - return hex value at % point between two colors
const hexMix = require('./hex-mix');
test('hexMix()', function(t) {
	t.plan(1);

	const expected = '#F07157';
	const res = hexMix(.5, {
		from: '#f39631',
		to: '#ed4c7c'
	});

	t.same(res, expected);
});
