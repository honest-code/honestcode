'use strict';

module.exports = function () {
	this.Before(() => {
		this.world = {latestResponse: {}};
		return Promise.resolve();
	});
};