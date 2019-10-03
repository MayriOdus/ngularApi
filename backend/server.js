const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) =>{
    res.end("welcome to root path");
})

app.post('/api/register',(req,res) =>{
    const username = req.body.username;
    const password = req.body.password
    console.log("Username : " + username);
    console.log("Password : " + password);
    res.json({result:"success",username:username,password:password});
    //res.end("username : " + username + ", password : " + password);
})

app.listen(8080,()=>{
    console.log("serving is running ...");
})

