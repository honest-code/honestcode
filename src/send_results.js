'use strict';

const request = require('request');
const fs = require('fs');

module.exports = (blueprintHookCode, testResultFilepath) => {
	return new Promise((ok, ko) => {
		const options = {
			url: `https://pro.honestcode.io/api/hooks/tr/${blueprintHookCode}`,
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