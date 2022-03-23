const express = require('express'); 

const app = express()
const port = 3000

const filmsRouter = require('./routes/films');



app.set('view engine', 'pug');
app.set('views','./views');



app.use("/api",filmsRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})