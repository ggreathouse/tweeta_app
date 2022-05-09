const express = require('express');
const path = require('path');
const app = express();
const port = 3000
app.listen(port, ()=>{
    console.log(`Hello world app. listening at port ${port}`)
})

app.set('view engine', 'ejs')


//Setting Routes
app.get('/', (req, res) =>{
    res.render('pages/index')
})

app.get('/profile', (req, res)=>{
    res.render('pages/profile')
})

app.get('/login', (req, res) =>{
    res.render('pages/login')
})

app.get('/signup', (req, res)=>{
    res.render('pages/signup')
})

app.use(express.static(path.join(__dirname, 'public')))