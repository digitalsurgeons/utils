/*
* map - map a value from one range to another
*
* map(5, {min: 0, max: 10}, {min: 50, max: 100}) // 75
*/
module.exports = function(val, inRange, outRange) {
	return (val - inRange.min) * (outRange.max - outRange.min) / (inRange.max - inRange.min) + outRange.min;
};
