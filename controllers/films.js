const allFilms = require("../utils/films.js");



const getFilmByTitle = async (req,res) => {
    if(req.params.title){
        const film = await allFilms.getFilmByTitle(req.params.title);//Devuelve 1
        res.status(200).json(film);//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      }
    //   else{
    //     const allFilms = await allFilms.getAllFilms();
    //     res.status(200).render("films.pug",{"film": film});//Pinta datos en el pug
    //   }
}


const filmByTitle = {
    getFilmByTitle
}
module.exports = filmByTitle;