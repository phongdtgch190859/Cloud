
const express = require('express');
const handlebars = require('express-handlebars');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');

db.connect();

const app = express();

const path = require('path')

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    helpers: {
        sum:(a,b) => a+b,
    }
}));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))

route(app);



const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
