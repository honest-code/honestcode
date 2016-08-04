'use strict';

module.exports = function (){
	this.Given(/^I already have the blueprint hook code "([^"]*)"$/, (bleuprintHookCode) => {
		const world = this.world;
		world.bleuprintHookCode = bleuprintHookCode;
		return Promise.resolve();
	});
};