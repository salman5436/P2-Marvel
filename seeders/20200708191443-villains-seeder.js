'use strict';
const axios = require('axios');
const db = require('../models');
var md5 = require('md5');


module.exports = {
  up: (queryInterface, Sequelize) => {
    // function hash(ts, pk, key) {
    //   console.log("HASH")
    //   return md5(ts+pk+key);
    // }
    // let TS = 1;
    // let PK = process.env.HASH;
    // let KEY = process.env.API_KEY;
    // let hashed = hash(TS, PK, KEY);
    // let apiCall = `https://gateway.marvel.com:443/v1/public/characters?name=${req.query.name}&apikey=${KEY}&ts=${TS}&hash=${hashed}`
    // axios.get(apiCall).then(function(apiResponse) {
    //   var villain = apiResponse.data;
    //   db.villain.create()
    //   .then(function(villain) {
    //       res.render('hero/villain', {villain: villain})
    //   })
    //   }).catch(function(error) {
    //   console.log(error)
    // })

      return queryInterface.bulkInsert('villains', [{name: "Thanos", description: "The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.", image: "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd", createdAt: new Date(),
      updatedAt: new Date()}
      ,{name: "Ultron", description: "Arguably the greatest and certainly the most horrific creation of scientific genius Dr. Henry Pym, Ultron is a criminally insane rogue sentient robot dedicated to conquest and the extermination of humanity.", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5261a838e93c0", createdAt: new Date(),
      updatedAt: new Date()}, 
      {name: "Magneto", description: "Max Eisenhardt, aka Magneto, the Master of Magnetism is a powerful mutant with the ability to generate and control magnetic fields.", image: "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5261a7e53f827", createdAt: new Date(),
      updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
