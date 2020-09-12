// console.log(__dirname);
// console.log(__filename);
// console.log(`Filename nya adalah ${__filename}`);
const path = require('path');

const fileLocation = path.join(__dirname, `app.js`);
const fileName = path.basename(fileLocation);
const fileExt = path.extname(fileName);

// console.log(fileLocation);
// console.log(fileName);
console.log(fileExt);