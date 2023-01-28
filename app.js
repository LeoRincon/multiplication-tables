const { multiply } = require('./src/helpers/multiply');

const initialIdex = 1;
const numberTimesBase = 10;
const limit = 10;

multiply(initialIdex, numberTimesBase, limit)
 .then((nameFile) => {
  console.log(`File: ${nameFile} : created`);
 })
 .catch((err) => {
  console.log(`${err}: the file can not created`);
 });
