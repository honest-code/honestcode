'use strict';

const fs = require('fs');

module.exports = function (){
	this.Given(/^I already have the file "([^"]*)" with result "([^"]*)"$/, (filename, filecontent) => {
		const world = this.world;
		world.filename = filename;
		return new Promise( (ok,ko) =>{
			fs.writeFile(filename, filecontent, err=>{
				if(err){
					ko(err);
				}
				ok();
			});
		});
	});
};