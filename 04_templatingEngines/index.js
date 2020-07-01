const express = require('express')
const path = require('path')

const app = new express()
const ejs = require('ejs')          //ejs: Embedded JavaScript
app.set('view engine', 'ejs')       //tell Express to use EJS as view engine

app.use(express.static('public'))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))     --> old way without view engine
    res.render('index')                                         //  --> new way with ejs, uses index.ejs in folder 'views'
})

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})