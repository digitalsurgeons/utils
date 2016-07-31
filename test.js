const test = require('tape');
const requestAnimationFrame = global.requestAnimationFrame = require('raf');

// range-map - map a value from one range to another
const rangeMap = require('./range-map');

test('range-map', function(t) {
	t.plan(1);

	const expected = 75;
	const res = rangeMap(5, {
		min: 0,
		max: 10
	}, {
		min: 50,
		max: 100
	});

	t.same(res, expected);
});

// hex-mix - return hex value at % point between two colors
const hexMix = require('./hex-mix');
test('hex-mix', function(t) {
	t.plan(1);

	const expected = '#F07157';
	const res = hexMix(0.5, {
		from: '#f39631',
		to: '#ed4c7c'
	});

	t.same(res, expected);
});

// set-interval-frame - run callback in request animation frame every setIntervals
const setIntervalFrame = require('./set-interval-frame');
test('set-interval-frame', function (t) {
	t.plan(1);

	const id = setIntervalFrame(function () {
		t.pass('passed in 2 seconds');
		clearInterval(id);
	}, 2000);
});

const setTimeoutFrame = require('./set-timeout-frame');
test('set-interval-frame', function (t) {
	t.plan(1);

	const id = setTimeoutFrame(function () {
		t.pass('passed in 2 seconds');
		clearInterval(id);
	}, 2000);
});
