import express from 'express';
import cors from 'cors';
import router from './routes/api.js';
import rateLimit from "express-rate-limit";
import helmet from 'helmet';
import mongoose from 'mongoose';
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE} from "./app/config/config.js";



const app = express();


// App use default Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));
app.use(helmet());

//App use Limiter

const limiter = rateLimit({windowMs: REQUEST_TIME,max:REQUEST_NUMBER});
app.use(limiter);

//Cache

app.set('etag', WEB_CACHE)

//Database connect

mongoose.connect(DATABASE,{autoIndex:true}).then(() => {

    console.log('MongoDB Connected')
}).catch( () =>{
    console.log('Connection err')
})

app.use('/api',router);

app.listen(PORT, () =>{
    console.log("Server running on " + PORT)
})

