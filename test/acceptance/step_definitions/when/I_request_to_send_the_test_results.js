'use strict';

const honestcode = require('../../../../src/honestcode');

module.exports = function (){
	this.When(/^I request to send the test results$/, () => {
		const world = this.world;
		return honestcode
			.sendTestResults(world.blueprintHookCode, world.filename)
			.catch(err=>{
				world.latestResponse = {
					error : err
				}
			});
	});
};