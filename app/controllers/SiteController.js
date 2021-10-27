const Toys = require('../models/Toys');
const {mutipleObject} = require('../../utill/mongoose');

class SiteController {
    //[Get]/home  
    home(req,res, next) {
        Toys.find({})
        .then(Toys =>
           res.render('home', {Toys:mutipleObject(Toys)})
        )
        .catch(next);
    }
    //[Get]/search
    async search(req,res,next){
        var name = req.query.name;
        Toys.find({name})
        .then(Toys =>
            res.render('home', {Toys:mutipleObject(Toys)})
            
        )
        .catch(next);
        
    }
 
   
}


module.exports = new SiteController;