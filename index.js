const express = require('express'); 

const app = express()
const port = 3000

const getFilmByTitle = require('./routes/films');



app.set('view engine', 'pug');
app.set('views','./views');



app.use("/api",getFilmByTitle);

// app.get('/api/film/:title?',async (req,res)=>{
//     try{
//         let f = await fetch(`https://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}`);
//         let film = await f.json();
//         res.render("films.pug", film);
//     }
//     catch(error){
//         console.log(`ERROR: ${error.stack}`);
//     }
// })

// // app.post('/',(req,res)=>{
    
// // })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})