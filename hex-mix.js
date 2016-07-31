/*
* hex-mix - return hex value at % point between two colors
*
* func(.5, {from: '#f39631', to: '#ed4c7c'}) // #F07157
*/
module.exports = function(perc, colors) {
	const hex = function(x) {
		x = x.toString(16).toUpperCase();
		return (x.length == 1) ? '0' + x : x;
	};

	let r = Math.ceil(parseInt(colors.to.substring(1, 3), 16) * perc + parseInt(colors.from.substring(1, 3), 16) * (1 - perc)),
		g = Math.ceil(parseInt(colors.to.substring(3, 5), 16) * perc + parseInt(colors.from.substring(3, 5), 16) * (1 - perc)),
		b = Math.ceil(parseInt(colors.to.substring(5, 7), 16) * perc + parseInt(colors.from.substring(5, 7), 16) * (1 - perc));

	return `#${hex(r)}${hex(g)}${hex(b)}`;
};
