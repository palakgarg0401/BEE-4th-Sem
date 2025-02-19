//Post request: if you want to change the state of the server
//data is not visible in the url
const express = require("express");
const app = express();

app.get("/adduser", (req, res) => {
    res.sendFile(__dirname + "/Register.html");
});
app.listen(4500, ()=>{
    console.log("Server started on Port 4500...");
});