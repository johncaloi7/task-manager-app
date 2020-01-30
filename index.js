const express = require('express')
const connectDb = require('./db')

//define routes
const user = require('./routes/user')
const task = require('./routes/task')

//initialize express
const app = express();

//connect databse
connectDb();


//body-parser
app.use(express.json())

//use the routes
app.use('/users', user);
app.use('/tasks', task)

const port = process.env.PORT 

app.listen(port, () => console.log(`Server running at ${port}.`))




//file upload
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         cb(undefined, true)
//         cb(new Error('File must be a pdf'))
//         cb(undefined, true)
//         cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From the middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// }) 
