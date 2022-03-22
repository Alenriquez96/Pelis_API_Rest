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
// const getAllFilms = async () => {
//     try{
//         let response = await fetch(`https://www.omdbapi.com/?t=${}&apikey=${apikey}`);//[]
//         let film = await response.json();//{}
//         return film;//Pinta datos en el pug
//       }catch(error){
//         console.log(`ERROR: ${error.stack}`);
//         return [];
//       }
// }

const allFilms = {
    getFilmByTitle
    // getAllFilms
}
module.exports = allFilms;


// Pruebas de ejecución
// getAllFilms().then(data=>console.log(data))
// getFilmByTitle(batman).then(data=>console.log(data))