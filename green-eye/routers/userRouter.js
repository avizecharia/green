const router = require('express').Router()

const { register, getProfile, setSettings } = require('../controllers/userController')

router.post('/regiser',register)

router.get('/rofile',getProfile)

router.patch('/settings',setSettings)

module.exports = router