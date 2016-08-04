'use strict';

const assert = require('assert');

module.exports = function (){
	this.Then(/^I don't receive any error$/, () => {
		const world = this.world;
		assert.ok( !world.latestResponse.hasOwnProperty('error') );
	});
};