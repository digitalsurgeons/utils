/*
* set-timeout-frame - run callback in request animation frame after setTimeout
*
* func(() => { console.log('Hi'); }, 200) // Print hi after 200ms
*/
module.exports = function(func, delay = 0) {
	if(typeof func !== 'function') {
		return false;
	}

	return setTimeout(function bindScope(func) {
		requestAnimationFrame(func);
	}.bind(this, func), delay);
};
