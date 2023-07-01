// type module imports the by es6 but package.json dosent undestand 
// so we need to typein dependencies type module package.json
import express from "express";
import cors from 'cors'
import storage from 'node-persist';

storage.init();

import Routes from "./routes/route.js"
import bodyParser from 'body-parser';





const app = express();
// making connection between front end and backend with different port numbers
const corsOptions = {
    origin : 'http://localhost:3000',
}
app.use(cors(corsOptions));

// this needs to be before Routes because it will parse and validate the requested data
// bodyparser or the json parser is used becaue the routes cannot handle the body request  this will handle that

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

// when your route is just 
app.use('/' , Routes)

// there will be routing here for the initial state of the action to be get


const PORT = 8000; 




app.listen( PORT , ()=> {console.log(`server is Running on Port ${PORT}`);});
