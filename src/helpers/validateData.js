const validateData = (argv) => {
 if (isNaN(argv.b)) {
  throw 'The base must be a number';
 }
 if (isNaN(argv.lt)) {
  throw 'The Limit must be a number';
 }
 if (typeof argv.l !== 'boolean') {
  throw 'The list must be a boolean';
 }
 return true;
};
module.exports = { validateData };
