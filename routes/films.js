const express = require('express');
const router = express.Router();
const filmByTitle = require('../controllers/films');


router.get('/', (req, res) => {
    console.log("HOLA");
})

router.get('/film/:title?',filmByTitle.getFilmByTitle);


module.exports = router;

