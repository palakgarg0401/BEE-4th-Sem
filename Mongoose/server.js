const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const User = require("./model/user");
const Blog = require("./model/blog");

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

//delete one user
app.delete("/users/:id", async(req, res) => {
    let {id} = req.params;
    let userById = await User.findByIdAndDelete(id);
    if(!userById) {
        return res.status(400).send({error : "User not found"});
    }
    res.send("User deleted");
});


//update the user
app.put("/users/:id", async(req, res) => {
    let {id} = req.params;
    let {name, email, password} = req.body;
    let updateUser = await User.findById(id);

    updateUser.name = name;
    updateUser.email = email;
    updateUser.password = password;
    await updateUser.save();
    res.send("User updated");
});


//Blogs...
//Create Blog
app.post("/blogs", async(req, res) => {
    let {title, content, author} = req.body; //reading data from form
    let newBlog = new Blog({
        title : title,
        content : content,
        author : author
    });
    await newBlog.save(); //asynchoronus (database quesries) //await is used to make asynchoronus to sychoronus
    res.send("Blog added");

});

//read all blogs
app.get("/blogs", async(req, res) => {
    let allblogs = await Blog.find();
    res.send(allblogs);
});

//read one Blog
app.get("/blogs/:title", async(req, res) => {
    let {title} = req.params;
    let BlogByTitle = await Blog.findOne(title);
    if(!BlogByTitle){
        return res.status(400).send({error : "Blog not found"});
    }
    res.send(BlogByTitle);
});

//delete one Blog
app.delete("/blogs/:title", async(req, res) => {
    let {title} = req.params;
    let BlogByTitle = await Blog.findOneAndDelete(title);
    if(!BlogByTitle) {
        return res.status(400).send({error : "Blog not found"});
    }
    res.send("Blog deleted");
});


//update the Blog
app.put("/blogs/:title", async(req, res) => {
    let {title} = req.params;
    let {title1, content, author} = req.body;
    let updateBlog = await Blog.findOne(title);

    updateBlog.title1 = title1;
    updateBlog.content = content;
    updateBlog.author = author;
    await updateBlog.save();
    res.send("Blog updated");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});