const path = require('path');
const express = require('express');
const app = express();

// absoulte path 
// const staticPath = path.join(__dirname, '/public');

// console.log(__dirname);

// Builtin middleware for static website / html website host 
// app.use(express.static(staticPath));


//To set the view engine hbs, It must to wirte same name with same parameters
// Its contain data from view folder file
app.set("view engine", "hbs");

app.get("/", (req, res ) =>{
    res.render("index");
});


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

app.get("/about/*", (req, res) =>{
    res.render("404",{
        errorpage: "Opps about page could not found"
    });
})


app.get("*", (req, res) =>{
    res.render("404",{
        errorpage: "Opps page could not found"
    });
})

app.listen(8000, () =>{
    console.log('Listening to the port og 8000');
})
