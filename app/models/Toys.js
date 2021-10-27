const { create } = require('express-handlebars');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const toys = new Schema({
   name: { type: String, maxlength: 1000 },
   price: { type: String,  maxlength : 20 },
   description: { type: String, maxlength: 100000},
   img: { type: String, maxlength : 2000},
   slug: { type: String, slug: 'name', unique : true },
   type: { type: String,  maxlength : 20},
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }

})


module.exports = mongoose.model('Toys', toys);