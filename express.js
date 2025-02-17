const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3002;
app.use(express.static(__dirname));
app.get("", (request, response)=>{
    //response.send("<h1> Server is created..... </h1>");
    response.sendFile(path.join(__dirname, "form.html"));
});
app.get("/home", (request, response)=>{
    response.send("<h1> home page...... </h1>");
});
app.listen(port, ()=>{
    console.log(`Server is running on ${port}......`);
});