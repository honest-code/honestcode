'use strict';

const assert = require('assert');

module.exports = function (){
	this.Then(/^I receive an error$/, () => {
		const world = this.world;
		assert.ok( world.latestResponse.hasOwnProperty('error') );
	});
};