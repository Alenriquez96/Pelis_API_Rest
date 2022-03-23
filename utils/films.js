//Utils se va a encargar de las funciones y tareas auxiliares como los fetch
const fetch = require('node-fetch');
const env = require("dotenv").config('./.env');
const apikey = process.env.API_KEY;


const getFilmByTitle = async (title) => {
    try{
        let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`);//{}
        let film = await response.json();//{}
        return [film];//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      }catch(error){
        console.log(`ERROR: ${error.stack}`);
        return [];
      }
}

const createFilm = async (film) => {
    try{
        let response = await fetch(`https://www.omdbapi.com/?t=${film.title}&apikey=${apikey}`,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(film)
            })
        let answer = await response.json(); // objeto de vuelta de la petición
        console.log(answer);
        return answer
        }
        catch (error){
            console.log(`ERROR: ${error.stack}`);
            return {};
        }
}

const updateFilm = async (title) => {
    try{
        let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`,{
        method:"PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(title)
        })
    //{}
        let film = await response.json();//{}
        return [film];//Pinta datos en el pug. Aquí hemos metido data en un objeto para  que con la plantilla del pug lo coja.
      }catch(error){
        console.log(`ERROR: ${error.stack}`);
        return [];
      }
}

const allFilms = {
    getFilmByTitle,
    createFilm,
    updateFilm
}
module.exports = allFilms;


// Pruebas de ejecución
// getAllFilms().then(data=>console.log(data))
// getFilmByTitle(batman).then(data=>console.log(data))