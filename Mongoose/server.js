const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

const User = require("./model/user");
const userRoutes = require("./routes/userRoutes");

const Blog = require("./model/blog");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.json);
app.use("/users", userRoutes); //will work on every request with base path /users
app.use("/blogs", blogRoutes);

mongoose.connect('mongodb://127.0.0.1:27017').then(() => console.log('Mongodb Connected!'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});