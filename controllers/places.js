const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET! /places (future list of places)')
})

module.exports = router