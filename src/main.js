#!/usr/bin/env node

'use strict';

const honestcode = require('./honestcode');

const blueprint_hook = process.argv[2];
const test_result = process.argv[3];

if (!blueprint_hook) {
	console.error('You have to use as first parameter the blueprint hook code');
	process.exit();
}

let blueprintHookCodeLen = blueprint_hook.length;
if (blueprintHookCodeLen!==24 && blueprintHookCodeLen!==36) {
	if (blueprint_hook.indexOf('https://') === -1 || blueprint_hook.indexOf('.honestcode.io/api/hooks/tr/') === -1) {
        console.error(`Main: you have to use as first parameter just a valid blueprint hook code (a 24 chars string) instead of "${blueprint_hook}"`);
        process.exit();
    }
}

if (!test_result) {
	console.error('You have to use as second parameter a valid path to the file with test result');
	process.exit();
}

const filepath = `${process.cwd()}/${test_result}`;

honestcode
	.sendTestResults(blueprint_hook, filepath)
	.then( () => {
		console.log('Congratulations! Your tests results have been sent to HonestCode.io successfully');
	})
	.catch( err => {
		console.error(err, blueprint_hook, test_result);
		process.exit();
	});
