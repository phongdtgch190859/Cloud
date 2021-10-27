module.exports = {
    mutipleObject : function (mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },
    aObject : function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}