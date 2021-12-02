import mongoose from 'mongo'
const lieuxFilmsSchema= new mongoose.Schema({
    id : mongoose.ObjectId,
    name: String, 
    movie: String, 
    country: String,
    type: String,
    fiction: String,
})

const model = mongoose.model("lieuxFilms",lieuxFilmsSchema);
exports.model = model;