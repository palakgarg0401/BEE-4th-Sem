//Post request: if you want to change the state of the server
//data is not visible in the url
const express = require("express");
const app = express();
//express.urlencoded : It is a Middleware that passes urlencoded data into object
app.use(express.urlencoded({extended : true}))

let userdata = [];

app.get("/adduser", (req, res) => {
    res.sendFile(__dirname + "/Register.html");
});

app.post("/adduser", (req, res) => {
    let {name, email, password} = req.body;
    let newUser = {
        name : name,
        email : email,
        password : password
    };
    userdata.push(newUser);
    //res.send(`<center><h1>User Added</h1> <br/> ${userdata} </center>`);
    res.send(userdata);
    console.log(name, email, password);
});
app.listen(4500, ()=>{
    console.log("Server started on Port 4500...");
});