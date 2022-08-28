const cookieParser = require('cookie-parser')
const express = require('express')

require('dotenv').config()
const app = express()
    //regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookie middleware
app.use(cookieParser())

const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postsRoute')
app.use('/api', userRouter)
app.use('/api', postRouter)

app.get('/', (req, res) => {
    res.send("Hi From Titan")
})
app.listen(3000, () => {
    console.log("server is runing on 3000 Port")
})