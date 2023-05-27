import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connectdb.js';
import express from 'express'
import {join} from 'path'
import router from './routers/web.js'
import bodyParser from 'body-parser';


const app=express()

const port = process.env.PORT || 3000;
const db_url=process.env.DATA_BASE_URI;
const dbName=process.env.DB_NAME;

//body middlevar
app.use(express.urlencoded({extended:true}));




app.use('/student',express.static(join(process.cwd(),'public')))
app.use('/student/edit',express.static(join(process.cwd(),'public')))


app.set('view engine','ejs')
// app.use("views",'./views')
//static File render

app.use('/student',router)

connectDB(db_url,dbName);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
