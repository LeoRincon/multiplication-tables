const { multiply } = require('./src/helpers/multiply');
const { validateData } = require('./src/helpers/validateData');

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

const initialIdex = 1;

multiply(initialIdex, argv.b, argv.lt, argv.l)
 .then((nameFile) => {
  console.log(`File: ${nameFile} : created`);
 })
 .catch((err) => {
  console.log(`${err}: the file can not created`);
 });

//!get the arguments from the process of node
// const [, , base = 'base=5'] = process.argv;
// const [, , , limitArg = 'base=5'] = process.argv;

// const [, numberTimesBase = defaultBase] = base.split('=');
// const [, limit = defaultLimit] = limitArg.split('=');
