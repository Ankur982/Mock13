const dotenv = require('dotenv');
const express = require('express');
const dbConnect = require("./dbConnect");
const randomWordRoutes = require("./routes/randomWord");
const userRoute = require("./routes/user");
const cors = require("cors");


//dotenv config
dotenv.config();

//mongodb connection
dbConnect();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//BASE URL OF RANDOM WORD API

app.use("/api", randomWordRoutes);


//user base url

app.use("/api", userRoute);




app.listen( process.env.PORT || 8080, () => { 
    console.log('Server Started On Port 8080') 
});