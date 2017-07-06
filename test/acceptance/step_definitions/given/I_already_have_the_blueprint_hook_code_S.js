'use strict';

module.exports = function (){
	this.Given(/^I already have the blueprint hook code "([^"]*)"$/, (blueprintHookCode) => {
		const world = this.world;
		world.blueprintHookCode = blueprintHookCode;
		return Promise.resolve();
	});
};