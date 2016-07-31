/*
* set-interval-frame -
*
* func() //
*/
module.exports = function(func, delay = 0) {
	if(typeof func !== 'function') {
		return false;
	}

	return setInterval(function bindScope(func) {
		requestAnimationFrame(func);
	}.bind(this, func), delay);
};
