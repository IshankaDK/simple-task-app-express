const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./dbConfig')
const taskRout = require('./routes/TaskRout')
const cors = require('cors')

app.use(cors())

app.use('/', taskRout)

app.listen(PORT, () => {
    console.log(`Task App is listen in post ${PORT}`);
})