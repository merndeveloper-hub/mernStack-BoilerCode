const mongoose = require ('mongoose');

// create connection with mongoode and create db e.g:(firstdata) name
mongoose.connect("mongodb://localhost:27017/firstdata",{useHandle})
.then(() =>console.log("connnection successful"))
.catch((error)=>console.log(err));

// A Mongoose schema defines the structure of the document,
// default values, validations, etc..,

const playlistSchema = new mongoose.Schema({
     name: {
         type: String,
         require: true
     },
     ctype: String,
     videos: Number,
     author: String,
     active: Boolean,
     date: {
         type: Date,
         default: Date.now
     }
})

// Create the collection in db(firstdata) and its data type
const Playlist = new mongoose.model("Playlist", playlistSchema);

// Create the document or insert in mongodb compass app

const createDocument = async () => {
    try {
    const reactPlaylist = new Playlist({
        name: "React JS",
        ctype: "Fornt end",
        videos: 80,
        author: "Owais Yameen",
        active: true
    }) 
     
    const nodePlaylist = new Playlist({
        name: "Node JS",
        ctype: "Fornt end",
        videos: 80,
        author: "Owais Yameen",
        active: true
    })
    
    const expressPlaylist = new Playlist({
        name: "Express JS",
        ctype: "Fornt end",
        videos: 80,
        author: "Owais Yameen",
        active: true
    })
   
    const jsPlaylist = new Playlist({
        name: "JS",
        ctype: "Fornt end",
        videos: 80,
        author: "Owais Yameen",
        active: true
    })
    
    //Single document save in mongoose
    //const result = await reactPlaylist.save();
   
 //Multile documents save in mongoose
    const result = await Playlist.insertMany([reactPlaylist,nodePlaylist,expressPlaylist,jsPlaylist]);
    console.log(result);
}catch(err){
    console.log(err);
}
}

createDocument();

// Read the data

const getDocument = async () => {
    const result = await Playlist.find({ctype: "Front end"})
    .select({naem: 1})
    .limit(1);
    console.log(result);
}

getDocument();