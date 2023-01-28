const fileSystem = require('fs');

const multiply = async (initialIdex, numberTimesBase, limit, HaveToList) => {
 try {
  let result = '';

  for (let index = initialIdex; index <= limit; index++) {
   result += `${numberTimesBase} X ${index} = ${index * numberTimesBase}\n`;
  }

  const data = `=========================
Table of the ${numberTimesBase}
=========================
${result}`;

  HaveToList ? console.log(data) : null;

  fileSystem.writeFileSync(`table-${numberTimesBase}.txt`, data);

  return `table-${numberTimesBase}.txt`;
 } catch (error) {
  throw error;
 }
};

module.exports = { multiply };
