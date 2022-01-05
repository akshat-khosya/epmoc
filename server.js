const express = require('express');
const cors = require("cors");
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=express();
const PORT= process.env.PORT || 4000 ;
dotenv.config();
app.use(express.json());
app.use(cors());
// MongoDb cluster connection
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err){console.log(err)}else{
        console.log("Connected to MongoDB");
    }
});

//MongoDb local connection
//   mongoose.connect('mongodb://localhost:27017/epmoc',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   () => {
//     console.log('Connected to MongoDB');
//   });


app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});

