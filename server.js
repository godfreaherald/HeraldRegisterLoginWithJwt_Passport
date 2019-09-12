
const express = require('express');
const mongoose = require ('mongoose')
const bodyParser =require('body-parser');
const passport =require('passport')

const usersRoute = require('./routes/users')
//DB config
//const db = require('./config/keys').mongoURI;
const db = " mongodb+srv://godfrea:23199100@cluster0-tupjt.mongodb.net/test?retryWrites=true&w=majority";
const app =express();
var cors = require('cors');


app.use(cors());
//set the bodyPaser Middleware
app.use(bodyParser.urlencoded( { extended:false  } ));
app.use(bodyParser.json());

//connect to db

mongoose.connect(db, { userNewUrlParser : true })
  .then( () => console.log('MongoDB connected successfully'))
    .catch( err => console.log(err));

//Passport Middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//set Routes
app.use('/users' ,  usersRoute)
//app.use('/users' , passport.authenticate('jwt', {session : false }), usersRoute)

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(` Server up and running on port ${port}`);
})





