const express = require('express');
const app = express();

app.get("/", (req, res ) =>{
    res.send("Hello world form the owais");
});

app.get("/about", (req, res ) =>{
    // res.write allow to write the code in html form
    res.write('<h1>Hello world form the owais</h1>')
    res.write('<h1>Hello world form the owais</h1>')
    // res.send call the data, not write in html form in this tag
    res.send();
});

app.get("/contact", (req, res ) =>{
    // express always show the data in the JSON from,when the write in object and array 
    res.send({
        id: 1,
        name: "owais"
    });
});

app.get("/detail", (req, res ) =>{
     // express always show the data in the JSON from,when the write in object and array 
    res.send([
        {
        id: 1,
        name: "owais",
        },
        {
            id: 2,
        name: "yameen",
        },
        {
        id: 3,
        name: "haris",
        }
]);
});

app.get("/tem", (req, res ) =>{
     // express always show the data in the JSON from,when the write in object and array 
    res.json([
        {
        id: 1,
        name: "owais",
        },
        {
            id: 2,
        name: "yameen",
        },
        {
        id: 3,
        name: "haris",
        }
]);
});

app.listen(8000, () =>{
    console.log('Listening to the port og 8000');
})
