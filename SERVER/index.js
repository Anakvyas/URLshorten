const express  =  require('express');
const ConnectDB  =  require('./database/connect');
const  route = require('./routes/urlroute');
const cors = require("cors")
ConnectDB();
const app =  express();
app.use(cors());
app.use(express.json());


app.use('/',route);


const PORT  = 3000;
app.listen(PORT,()=>{
    console.log(`Server is runnng on ${PORT}`)
})