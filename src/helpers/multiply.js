const colors = require('colors');

const fileSystem = require('fs');

const multiply = async (initialIdex, numberTimesBase, limit, HaveToList) => {
 try {
  let result = '';

  for (let index = initialIdex; index <= limit; index++) {
   result += `${numberTimesBase} ${'X'.yellow} ${index} ${'='.yellow} ${
    index * numberTimesBase
   }\n`.cyan;
  }

  const data = `${'========================='.yellow}
${`Table of the${numberTimesBase}`.blue}
${'========================='.red}
${result}`;

  HaveToList ? console.log(data) : null;

  fileSystem.writeFileSync(`table-${numberTimesBase}.txt`, data);

  return `table-${numberTimesBase}.txt`;
 } catch (error) {
  throw error;
 }
};

module.exports = { multiply };
