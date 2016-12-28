const packages = require( './package.json' );

const config = {
  "suites": packages.packages.map( ( package ) => `./packages/${package}/index.test.html` )
};

module.exports = config;
