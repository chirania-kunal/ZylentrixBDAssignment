const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse the data from the request 
app.use(express.json());


// import routes for User API
const userRoutes = require("./routes/userRoutes")


app.use("/api/v1", userRoutes)


// start server
app.listen(PORT, ()=>{
    console.log(`Server started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route /
app.get("/",(req,res) =>{
    res.send(`<h1> This is HOMEPAGE  for server  </h1>`);
})