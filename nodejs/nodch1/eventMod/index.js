const EventEmitter = require('events');

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("your name is owais");
// });

// event.on("sayMyName", () => {
//     console.log("your name is yameen");
// });

// event.on("sayMyName", () => {
//     console.log("your name is owaisyameen");
// });


// event.emit('sayMyName');


event.on('checkPage', (sc, msg)=> {
    console.log(`staus code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok")