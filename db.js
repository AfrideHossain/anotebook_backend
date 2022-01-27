const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://afride:afride123@cluster0.qzuor.mongodb.net/anotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    });
}

module.exports = connectToMongo;
