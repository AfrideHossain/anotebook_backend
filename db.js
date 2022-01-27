const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://<username>:<password>@cluster0.qzuor.mongodb.net/anotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    });
}

module.exports = connectToMongo;
