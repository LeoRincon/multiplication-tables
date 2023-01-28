const colors = require('colors');

const { multiply } = require('./src/helpers/multiply');
const argv = require('./src/config/yargs');

const initialIdex = 1;

console.clear();

multiply(initialIdex, argv.b, argv.lt, argv.l)
 .then((nameFile) => {
  console.log(`File: ${nameFile} : created`.green);
 })
 .catch((err) => {
  console.log(`${err}: the file can not created`.red);
 });

//!get the arguments from the process of node
// const [, , base = 'base=5'] = process.argv;
// const [, , , limitArg = 'base=5'] = process.argv;

// const [, numberTimesBase = defaultBase] = base.split('=');
// const [, limit = defaultLimit] = limitArg.split('=');
