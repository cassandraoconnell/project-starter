// esm configuration; allows module-style import/export
require = require('esm')(module); //eslint-disable-line

// Project entry point declaration
module.exports = require('./src/index.js');
