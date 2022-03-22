const express = require('express'); 
const fetch = require("node-fetch");
const env = require("dotenv").config('./.env');
const apikey = process.env.API_KEY;


const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static("./public"));
app.use(express.json());

console.log(apikey);
app.get('/api/film/:title?',async (req,res)=>{
    try{
        let f = await fetch(`https://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}`);
        let title = await f.json();
        res.render("films.pug", title);
    }
    catch(error){
        console.log(`ERROR: ${error.stack}`);
    }
})

// app.post('/',(req,res)=>{
    
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})