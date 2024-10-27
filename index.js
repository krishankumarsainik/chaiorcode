const express = require('express');
require('dotenv').config();

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send(`Server is running  port ${req.params.port}`)
})

app.get('/login', (req, res) => {
    res.send("login at chai or code")
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on  ${port}`)
})