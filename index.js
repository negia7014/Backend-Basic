// step-1 create a folder   
// step-2 Terminal me use folder ke under jau cd Desktop/foldernam
// step-3 npm init-y us folder mai run karo 
// step-4 open that folder on vs code 
// step-5 npm i express 
// step-6 create server.js
// initialise a project with npm 

// create a server
const express = require('express');//instantiate a server means insance of server 
const app = express();

// used to parse request ki body in express -> post or put 
//const bodyparser = require('bodyparser');
// power up app by using bodyparser
//app.use(bodyparser.json()); // specific bol rhe hai json data ko parse karna hai and request ki body mai dalna hai


app.use(express.json()); // middleware

// live a server 
// activate a server on 3000 port and define behaviour
app.listen(3000,()=>{
    console.log("server started at port no 3000");
})


// create a route means we server ke instance par get ka route define kar diya 
app.get('/',(req,res)=>{
    res.send("Hello jii")
})

// create a post route request
app.post('/api/cars',(request,response)=>{ // define route of own  /api/cars jab bhi ish route par aauge then behaviour in callback function
  const{name,brand} =  request.body; // data request ki body mai bind hai then destructure karte request ki body se name and brand nikal diya
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
})
