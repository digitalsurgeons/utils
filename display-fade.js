/*
* display-fade (ensure transition set on element in CSS)
*    in - set display block then opacity 1 after short delay
*    out - set opacity 0 then display none after short delay
*
* func(document.querySelector('.element'), 1000, () => { console.log('done!'); });
*/

const setTimeoutFrame = require('./set-timeout-frame');

module.exports = {
	in: (element, delay = 100, func) => {
		element.style.display = 'block';

		setTimeoutFrame(function bindScope(element, func) {
			element.style.opacity = 1;

			if(typeof func === 'function') {
				func();
			}
		}.bind(this, element, func), delay);
	},

	out: (element, delay = 300, func) => {
		element.style.opacity = 0;

		setTimeoutFrame(function bindScope(element, func) {
			element.style.display = 'none';

			if(typeof func === 'function') {
				func();
			}
		}.bind(this, element, func), delay);
	}
};
