const express = require('express'),
     mongoose = require('mongoose'),
       morgan = require('morgan'),
       helmet = require('helmet'),
       dotenv = require('dotenv');
        

const app = express();

//import modules
const landingRoute = require("./routes/landing"),
        userRoute = require("./routes/users"),
        authRoute = require("./routes/auth"),
        postRoute = require("./routes/posts");


mongoose.connect('mongodb://localhost:27017/connekt', () => {
    console.log('connected to DB');
})

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// midlleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);


const port = 8080 || process.env.port;

app.listen(port, () => {
    console.log('backend server running')
})