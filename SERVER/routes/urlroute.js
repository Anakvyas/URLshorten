const express  =  require("express");
const shortener = require("../controllers/shorten");
const geturl =  require('../controllers/geturl')
const router =  express.Router();


router.post('/shorten',shortener);
router.get('/:url',geturl);

module.exports = router;