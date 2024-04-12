const express = require('express');
const app = express();

app.get("/", (req, res ) =>{
    res.send("Hello world form the owais");
});

app.get("/about", (req, res ) =>{
    res.send("Hello world form the about page");
});

app.get("/contact", (req, res ) =>{
    res.send("Hello world form the contact page");
});

app.get("/detail", (req, res ) =>{
    res.send("Hello world form the detail page");
});

app.get("/tem", (req, res ) =>{
    res.send("Hello world form the tem page");
});

app.listen(8000, () =>{
    console.log('Listening to the port og 8000');
})
