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


var md5 = require('md5');



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

router.get('/show', (req, res) => {
    function hash(ts, pk, key) {
        console.log("HASH")
        return md5(ts+pk+key);
    }
    let TS = 1;
    let PK = process.env.HASH;
    let KEY = process.env.API_KEY;
    let hashed = hash(TS, PK, KEY);
    let apiCall = `https://gateway.marvel.com:443/v1/public/characters?name=${req.query.name}&apikey=${KEY}&ts=${TS}&hash=${hashed}`
    console.log(apiCall)
    axios.get(apiCall).then(function(apiResponse) {
        var hero = apiResponse.data;
        db.team.findAll()
        .then(function(team) {
            console.log('🅱️🅱️🅱️🅱️🅱️🅱️🅱️')
            console.log(req.user);
            res.render('hero/show', {hero: hero, team: team})
        })
        }).catch(function(error) {
        console.log(error)
    })
})

router.get('/team', (req, res) => {
    db.team.findAll()
    .then(function(team) {
        res.render('hero/team', {team: team})
    })
    .catch(function(error) {
        console.log('💩💩💩💩💩💩💩💩💩💩');
        console.log(error);
    })
})

router.post('/team', (req, res) => {
    db.team.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        userId: req.user
    }).then(function(teamup) {
        console.log(teamup.get())
        res.redirect('/hero/team')
    }).catch(function(error) {
        console.log('💩💩💩💩💩💩💩💩💩💩');
        console.log(error);
      })
})




// router
// if ()


// export router
module.exports = router;