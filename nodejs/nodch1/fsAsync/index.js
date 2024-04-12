const fs = require('fs');

// fs.writeFile('read.txt', 'hello eceryone',( err) => {
//     console.log("fiels is created");
// })

fs.readFile('read.txt' , 'uft8', (err, data) => {
    console.log(data);
})