const fs = require('fs');

// Creating a new file
//fs.writeFileSync('read.txt', "welcome to the class");

//fs.writeFileSync('read.txt', "Hello eceryone,welcome to the class");

//fs.appendFileSync('read.txt', " hwo are you?")


//const buf_data = fs.readFileSync('read.txt');

//org_data = buf_data.toString();

//console.log(org_data);

fs.renameSync('read.txt', 'readwrite.txt');