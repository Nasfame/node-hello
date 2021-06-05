const EventEmitter = require("events");

class Logger extends EventEmitter{
    log(message,arg){ //method no need of function keyword
        console.log(message)
        this.emit('message Logged',arg) //raise/signal event
    }
}

module.exports = Logger