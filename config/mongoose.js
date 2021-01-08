const mongoose=require('mongoose');

const uri = "mongodb+srv://pxrsw:B123123b@habittracker.zsjy4.mongodb.net/habitTracker?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongoDB'));

db.once('open',function(){
    console.log('connected to the database');
});

module.exports=db;