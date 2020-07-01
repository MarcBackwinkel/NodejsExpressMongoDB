const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')


//This function is a request handler!!!
//It decides how to respond (res) to an incoming request (req)
const server = http.createServer((req, res) => {
    
    if (req.url === '/about') 
        res.end(aboutPage)
    else if (req.url === '/contact')
        res.end(contactPage)
    else if (req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
})

server.listen(3000)