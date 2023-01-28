const { validateData } = require('../helpers/validateData');

const argv = require('yargs')
 .option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Base of the multiplication table',
 })
 .option('lt', {
  alias: 'limit',
  type: 'number',
  demandOption: true,
  describe: 'Show the table in the console',
 })
 .option('l', {
  alias: 'list',
  type: 'boolean',
  default: false,
  demandOption: false,
  describe: 'Show the table in the console',
 })
 .check((argv, options) => validateData(argv)).argv;

module.exports = argv;
