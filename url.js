const { parse } = require('path');
const url = require('url');
const address = (`https://www.google.com/search?client=firefox-b-d&q=apa+itu+pemrograman`);
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);