// this database.js file will establish connection between application server and database

// importing the mongoose
const mongoose = require("mongoose");


require("dotenv").config();


//Function to connect with the database
const dBConnect = () => {
    mongoose.connect(process.env.DATABASE_URL) 
    .then(() => console.log("DB ka connection is successful"))
    .catch( (error) => {
        console.log("Issue in db Connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dBConnect;