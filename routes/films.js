const express = require('express');
const router = express.Router();
const Films = require('../controllers/films');




router.get('/film/:title?',Films.getFilmByTitle);

router.post('/film/', Films.createFilm);

router.put('/film/', Films.updateFilm)


module.exports = router;

