const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/newform')
  })

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/hthaiml.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catcafe.jpg'
    }]
    res.render('places/index', {places})
})

module.exports = router