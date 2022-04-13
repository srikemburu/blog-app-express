//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
require('dotenv').config()

// import blogPosts from "./routes/blogPosts.js"
// const blogPosts = require('./routes/blogPosts.routes.js')

const db = mongoose.connection

//Environment variables
 const app = express();

//  app.get('/', (req,res) => {
//     res.send('Hello World')
//  })

const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001 

//Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded( { extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
// app.use("/api/blogs", blogPosts)

//Routes
const blogsController = require('./controllers/blogs.js');
app.use('/blogs', blogsController);

app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
})


