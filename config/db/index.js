const mongoose = require('mongoose')
async function connect(){
 try {
    await mongoose.connect('mongodb://localhost:27017/ATN_TOYS_STORE',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connect successfuly");
 } catch (error) {
    console.log("connect fail");
 }
}
module.exports = { connect };