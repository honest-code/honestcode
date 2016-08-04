'use strict';

const fs = require('fs');

module.exports = function () {
	this.After(() => {
		const world = this.world;

		return new Promise( (ok,ko) =>{
			fs.unlink(world.filename, err =>{
				if(err) ko(err);
				else {
					ok();
				}
			})
		});

	});
};