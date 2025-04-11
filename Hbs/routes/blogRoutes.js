const express = require("express");
const router = express.Router();
const Blog = require("../model/blog");

//Create Blog
router.post("/", async(req, res) => {
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
router.get("/", async(req, res) => {
    let allblogs = await Blog.find();
    res.send(allblogs);
});

//read one Blog
router.get("/:title", async(req, res) => {
    let {title} = req.params;
    let BlogByTitle = await Blog.findOne(title);
    if(!BlogByTitle){
        return res.status(400).send({error : "Blog not found"});
    }
    res.send(BlogByTitle);
});

//delete one Blog
router.delete("/:title", async(req, res) => {
    let {title} = req.params;
    let BlogByTitle = await Blog.findOneAndDelete(title);
    if(!BlogByTitle) {
        return res.status(400).send({error : "Blog not found"});
    }
    res.send("Blog deleted");
});


//update the Blog
router.put("/:title", async(req, res) => {
    let {title} = req.params;
    let {title1, content, author} = req.body;
    let updateBlog = await Blog.findOne(title);

    updateBlog.title1 = title1;
    updateBlog.content = content;
    updateBlog.author = author;
    await updateBlog.save();
    res.send("Blog updated");
});

module.exports = router;