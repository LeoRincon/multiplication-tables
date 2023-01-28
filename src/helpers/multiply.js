const fileSystem = require('fs');
require('colors');

const multiply = async (initialIdex, numberTimesBase, limit, HaveToList) => {
 try {
  let resultToFile = '';

  for (let index = initialIdex; index <= limit; index++) {
   resultToFile += `${numberTimesBase} X ${index} = ${
    index * numberTimesBase
   }\n`;
  }

  const dataToFile = `=========================
Table of the ${numberTimesBase}
=========================
${resultToFile}`;

  const dataToConsole = `${'========================='.yellow}
${`Table of the${numberTimesBase}`.blue}
${'========================='.red}
${resultToFile}`;

  HaveToList ? console.log(dataToConsole) : null;

  fileSystem.writeFileSync(`table-${numberTimesBase}.txt`, dataToFile);

  return `table-${numberTimesBase}.txt`;
 } catch (error) {
  throw error;
 }
};

module.exports = { multiply };
