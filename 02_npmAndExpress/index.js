const express = require('express')  //require express module
const app = express()               //calls express function to start new Express app
const path = require('path')        //get specific path to a file
app.use(express.static('public'))   //all assets will be provided from directory 'public'

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

//both following request handlers work asynchronously!

//app.get to handle HTTP GET requests
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))         // __dirname (2 x _!!): reference to full absolute path 
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Marc Backwinkel'
    })
})