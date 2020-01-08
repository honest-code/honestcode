'use strict';

const request = require('request');
const fs = require('fs');

module.exports = (blueprintHookCode, testResultFilepath) => {
	return new Promise((ok, ko) => {
		let url = `https://pro.honestcode.io/api/hooks/tr/${blueprintHookCode}`;

		let blueprintHookCodeLen = blueprintHookCode.length;
		if (blueprintHookCodeLen!==24 && blueprintHookCodeLen!==36) {
            if (blueprintHookCode.indexOf('https://') === 0 && blueprintHookCode.indexOf('.honestcode.io/api/hooks/tr/') !== -1 && blueprintHookCode.substr(blueprintHookCode.lastIndexOf('/')).length===25) {
							url = blueprintHookCode;
            }
            else {
							let errorMsg = `Results error: you have to use as first parameter just a valid blueprint webhook URL code instead of "${blueprintHookCode}". `;
							let bpUrl = "your Blueprint page in https://pro.honestcode.io";
							let bpPos = blueprintHookCode.indexOf('hooks/tr/blueprint/bp.');
							if (bpPos !== -1) {
								bpUrl = "https://pro.honestcode.io/#/blueprint/edit/" + blueprintHookCode.substr (bpPos+19,12)
							}
							errorMsg += `You can get the full webhook URL at ${bpUrl}`;
							console.error(errorMsg);
							const err = new Error (errorMsg);
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