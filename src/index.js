const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));
// handlebars
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

//

app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))
// connectdb
db.connect();

route(app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})