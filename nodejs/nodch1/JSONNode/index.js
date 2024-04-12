const fs = require('fs');

const objData = {
    name: "owais",
    Age: 26,
    class: "Food Sci"
}


const jsonData = JSON.stringify(objData);

fs.writeFile('json1.json', jsonData, (err)=> {
    console.log("Add object data inito new file");
})

fs.readFile('json1.json', 'utf-8', (err, data)=> {
    console.log(data);

    const json = JSON.parse(data);
    console.log(json);
})