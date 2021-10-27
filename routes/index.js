
const siteRouter = require('./site');
const toysRouter = require('./toys');

function route(app){
    

    app.use('/toys', toysRouter);
    app.use('/', siteRouter);

}

module.exports = route;
