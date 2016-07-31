/*
* display-fade -
*
* func() //
*/

const setTimeoutFrame = require('set-timeout-frame');

module.exports = {
	in: (element, delay = 100) => {
		element.style.display = 'block';

		setTimeoutFrame(function bindScope(element) {
			element.style.opacity = 1;
		}.bind(this, element), delay);
	},

	out: (element, delay = 300) => {
		element.style.opacity = 0;

		setTimeoutFrame(function bindScope(element) {
			element.style.display = 'none';
		}.bind(this, element), delay);
	}
};
