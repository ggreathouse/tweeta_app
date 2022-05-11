const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')


const app = express();
dotenv.config()
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Hello world app. listening at port ${process.env.PORT}`)
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

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static(path.join(__dirname, 'public')))