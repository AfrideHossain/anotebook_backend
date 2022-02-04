const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://afride:afride123@cluster0.qzuor.mongodb.net/anotebook?retryWrites=true&w=majority";
const mongoURI = process.env.MONGO_URI || "mongodb+srv://afride:afride123@cluster0.qzuor.mongodb.net/anotebook?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
        console.log("connected to mongo successfully");
    });
}

module.exports = connectToMongo;
