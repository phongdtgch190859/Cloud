const Toys = require('../models/Toys');
const {aObject} = require('../../utill/mongoose')
const {mutipleObject} = require('../../utill/mongoose')

class ToysController {
    //[Get]/toys/slug  
    show(req,res) {
       
        Toys.findOne({slug:req.params.slug})
        .then(Toys=> { 
            // Toys =Toys.toObject()
            res.render('toys/show',{Toys:aObject(Toys)})})
    }

    //[Get]/toys/stored
    detail(req,res, next) {
        Toys.find({})
        .then(Toys =>
           res.render('toys/stored', {Toys:mutipleObject(Toys)})
        )
        .catch(next);
    }

    //[Get]/ home/create
    create(req,res){
        res.render('toys/create');
    }

    //[Post]/save
    save(req,res, next){
        const toys = new Toys(req.body)
        toys.save()
        .then(()=>{
            res.redirect('/')
        })
        .catch(next);
    }
    //[Get]/:id/edit
    edit(req,res, next) {
        Toys.findById(req.params.id)
        .then(Toys=> { 
            Toys =Toys.toObject()
            res.render('toys/edit',{Toys})
        })
    }
    //[Put] toys/id
    async update(req, res, next){
          Toys.updateOne({ _id: req.params.id }, req.body)
        .then(()=> res.redirect('/'))
        .catch(next)
    }
     //[Put] toys/d
     delete(req, res)  {
        Toys.findByIdAndRemove(req.params.id, (err, Toys) => {
            if (!err) {
                res.redirect('/toys/stored');
            }
            else {
                console.log('Error in toy remove :' + err);
            }
        });
    
    }

    findBoy(req,res,next){
        var type = 'boy';
        Toys.find({type})
        .then(Toys =>
            res.render('home', {Toys:mutipleObject(Toys)})
            
        )
        .catch(next);
        
    }

    findGirl(req,res,next){
        var type = 'girl';
        Toys.find({type})
        .then(Toys =>
            res.render('home', {Toys:mutipleObject(Toys)})
            
        )
        .catch(next);
        
    }
}

module.exports = new ToysController;