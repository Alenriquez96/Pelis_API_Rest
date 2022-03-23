const allFilms = require("../utils/films.js");



const getFilmByTitle = async (req,res) => {
    if(req.params.title){
        const film = await allFilms.getFilmByTitle(req.params.title);//Devuelve 1
        res.status(200).json(film);//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      }
}


const createFilm = async (req,res) => {
    console.log(req.body); // Objeto recibido de producto nuevo
    const newFilm = req.body;// json con el nuevo producto a guardar
    const answer = await allFilms.createFilm(newFilm);

    res.status(200).send(`Película ${answer}  guardado en el sistema`);

}

const updateFilm = async (req,res) => {
    if(req.params.title){
        const film = await allFilms.updateFilm(req.params.title);//Devuelve 1
        res.status(200).json(film);//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      }

}


const Films = {
    getFilmByTitle,
    createFilm,
    updateFilm
}
module.exports = Films