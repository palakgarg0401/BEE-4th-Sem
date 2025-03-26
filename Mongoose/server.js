const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const User = require("./model/user");

mongoose.connect('mongodb://127.0.0.1:27017').then(() => console.log('Mongodb Connected!'));

//Create User
app.post("/users", async(req, res) => {
    let {name, email, password} = req.body; //reading data from form
    let newUser = new User({
        name : name,
        email : email,
        password : password
    });
    await newUser.save(); //asynchoronus (database quesries) //await is used to make asynchoronus to sychoronus
    res.send("User added");

});

//read all users
app.get("/users", async(req, res) => {
    let allUsers = await User.find();
    res.send(allUsers);
});

//read one user
app.get("/users/:id", async(req, res) => {
    let {id} = req.params;
    let userById = await User.findById(id);
    if(!userById){
        return res.status(400).send({error : "User not found"});
    }
    res.send(userById);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});