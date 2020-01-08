honestcode
==========

The HonestCode client is a tool which helps DevOps to integrate different systems with honestcode.io

[![HonestCode](https://pro.honestcode.io/api/blueprint/bp.BJL88X54W/environment/rJlIL8X94rkW8UUQ5EByMIUL/badge.svg)](https://pro.honestcode.io/#/blueprint/edit/bp.BJL88X54W)

[![Coverage Status](https://coveralls.io/repos/github/honest-code/honestcode/badge.svg?branch=master)](https://coveralls.io/github/honest-code/honestcode?branch=master)

[![CircleCI](https://circleci.com/gh/honest-code/honestcode.svg?style=svg)](https://circleci.com/gh/honest-code/honestcode)


# Installation

```sh
npm install
```

# Tests
npm run test-acceptance

# NPM tool publishing (npm administrators)
npm login
npm publish

# Usage

You can find the _{WEB_HOOK}_ value in the projects' blueprint page at [pro.HonestCode.io](https://pro.honestcode.io)

```sh
honestcode {WEB_HOOK} {TEST_RESULTS_FILENAME}
```

