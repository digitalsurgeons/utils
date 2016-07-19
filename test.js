
// map - map a value from one range to another
const map = require('./map');
console.log('map()', map(5, {
	min: 0,
	max: 10
}, {
	min: 50,
	max: 100
}));

// hexMix - return hex value at % point between two colors
const hexMix = require('./hexMix');
console.log('hexMix()', hexMix(.5, {
	from: '#f39631',
	to: '#ed4c7c'
}));
