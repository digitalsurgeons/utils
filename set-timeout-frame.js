/*
* set-timeout-frame -
*
* func() //
*/
module.exports = function(func, delay = 0) {
	if(typeof func !== 'function') {
		return false;
	}

	return setTimeout(function bindScope(func) {
		requestAnimationFrame(func);
	}.bind(this, func), delay);
};
