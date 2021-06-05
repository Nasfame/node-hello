const express = require("express")
const { readFile } = require("fs").promises

const app = express()

app.get('/', (req,res)=>{
    readFile('./home.html','utf-8').then((html,err)=>{
        if(err) res.send("404")
        res.send(html)})
})

// process.env.PORT=900
app.listen(process.env.PORT||3000,()=>console.log('App open on localhost:3000')) //if port is set in process.env.PORT it runs in that port
