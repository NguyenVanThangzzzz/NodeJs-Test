//const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

// handlebars
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');
//
app.use(morgan('combined'));

//
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})