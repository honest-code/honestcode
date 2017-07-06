'use strict';

const request = require('request');
const fs = require('fs');

module.exports = (blueprintHookCode, testResultFilepath) => {
	return new Promise((ok, ko) => {
		let url = `https://pro.honestcode.io/api/hooks/tr/${blueprintHookCode}`;

		let blueprintHookCodeLen = blueprintHookCode.length;
		if (blueprintHookCodeLen!==24 && blueprintHookCodeLen!==36) {
            if (blueprintHookCode.indexOf('https://') === 0 && blueprintHookCode.indexOf('.honestcode.io/api/hooks/tr/') !== -1) {
				url = blueprintHookCode;
            }
            else {
				console.error(`You have to use as first parameter just a valid blueprint hook code (a 24 chars string) instead of "${blueprintHookCode}"`);
                const err = new Error (`You have to use as first parameter just a valid blueprint hook code (a 24 chars string) instead of "${blueprintHookCode}"`);
                ko(err);
            }
        }
		const options = {
			url: url,
			method: 'POST',
			json: true,
			body: fs.readFileSync(testResultFilepath).toString()
		};
		request(options, err => {
			if (err) {
				ko(err);
			}
			else {
				ok();
			}
		});
	});
};