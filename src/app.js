const fileSystem = require('fs');

const initialIdex = 1;
const numberTimesBase = 10;
const limit = 10;
let result = '';

for (let index = initialIdex; index <= limit; index++) {
 result += `${numberTimesBase} X ${index} = ${index * numberTimesBase}\n`;
}

const data = `=========================
Table of the ${numberTimesBase}
=========================
${result}`;

console.log(data);

fileSystem.writeFile(`table-${numberTimesBase}.txt`, data, (err) => {
 if (err) throw err;
 console.log(`The file table-${numberTimesBase}.txt has been saved!`);
});
