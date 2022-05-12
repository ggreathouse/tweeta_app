const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')


const app = express();
dotenv.config()
connectDB()

app.use(cookieParser())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', (path.join(__dirname, '/src/templates/views')))

app.use(authenticate)

require('./src/routes')(app)

app.listen(process.env.PORT, ()=>{
    console.log(`Hello world app. listening at port ${process.env.PORT}`)
})



// //Setting Routes
// app.get('/', (req, res) =>{
//     res.render('pages/index')
// })

// app.get('/profile', (req, res)=>{
//     res.render('pages/profile')
// })

// app.get('/login', (req, res) =>{
//     res.render('pages/login')
// })

// app.get('/signup', (req, res)=>{
//     res.render('pages/signup')
// })

