const express = require('express')
const router = express.Router()

const {getPeople,postpeople,postpostman,putpeople,deletepeople} = require('../controllers/people.js')



router.post('/',postpeople)

router.post('/postman',postpostman)

router.get('/',getPeople)

router.put('/:id',putpeople)

router.delete('/:id',deletepeople)

module.exports = router
