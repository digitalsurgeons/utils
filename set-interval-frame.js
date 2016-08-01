/*
* set-interval-frame - run callback in request animation frame every setInterval
*
* func(() => { console.log('Hi'); }, 200) // Print hi every 200ms
*/
module.exports = function(func, delay = 0) {
	if(typeof func !== 'function') {
		return false;
	}

	return setInterval(function bindScope(func) {
		requestAnimationFrame(func);
	}.bind(this, func), delay);
};
