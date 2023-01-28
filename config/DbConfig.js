const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

let connectionObj = mongoose.connection;

const dbConnect = async () => {
    try {
        await connectionObj;
        console.log("DB connection successful");

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

dbConnect();