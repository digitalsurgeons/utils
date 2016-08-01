# DS Utils

Digital Surgeons utility modules

**Installation**

	$ npm install ds-utils

**Example Usage**

	var Utils = {
		rangeMap: require('ds-utils/range-map'),
		hexMix: require('ds-utils/hex-mix')
	};

**Module List**

- `range-map` - map a value from one range to another
- `hex-mix` - return hex value at % point between two colors
- `set-timeout-frame` - run callback in request animation frame after setTimeout
- `set-interval-frame` - run callback in request animation frame every setInterval
- `display-block` - Fade DOM elements in / out. Set display property first followed by opacity after short delay. Ensure elements have transition set in CSS. 
