require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('CONNECTED! to server')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 MISSING! content</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${PORT}`)
})