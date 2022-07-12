require("dotenv").config();
const express = require('express');
const cors = require('cors')

const mainRouter = require('./routes/index.routes');
const db = require('./db')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',mainRouter)

const PORT = process.env.PORT || 4444

const start = async () =>{
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, ()=>console.log(`server working on port = ${PORT}`))
    } catch (error) {
        console.log(error.message)
    }
}

start()