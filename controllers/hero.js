require('dotenv').config();
//require express
const express = require('express');
//import router
const router = express.Router();
//import db
const db = require('../models');
const axios = require('axios');
const flash = require('connect-flash');
const session = require('express-session');




router.get('/', (req, res) => {
    res.render('hero/home')
})

// router.get('/wolverine', (req, res) => {
//     var marvelUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${req.params.name}&apikey=${API_KEY}`
    
//     axios.get(marvelUrl).then(function(apiResponse) {
//         var heros = apiResponse.data;
//         res.show('hero/show', {heros})
//     })
// })

router.get('/:name', (req, res) => {
    var marvelUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${req.params.name}&apikey=${process.env.API_KEY}`
    axios.get(marvelUrl).then(function(apiResponse) {
         var hero = apiResponse;
        res.render('hero/show', {hero})
    }).catch(function(error) {
        console.log(error)
    })
})

router.post('/:name', (req, res) => {
    db.create
})


router.get('/team', (req, res) => {
    findAll
    res.render('hero/team')
})

router






// export router
module.exports = router;