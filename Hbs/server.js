const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

//using hbs -> template engine
app.set('view engine', 'hbs');

const userRoutes = require("./routes/userRoutes");

const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());
app.use("/users", userRoutes); //will work on every request with base path /users

app.get("/", (req, res) => {
    res.render("home", {
        name : "Palak"
    });
})

app.get("/user", (req, res) => {
    res.render("user", {
        name : "Palak",
        email : "gargpalak0401@gmail.com"
    })
})

app.use("/blogs", blogRoutes);

mongoose.connect('mongodb://127.0.0.1:27017').then(() => console.log('Mongodb Connected!'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});