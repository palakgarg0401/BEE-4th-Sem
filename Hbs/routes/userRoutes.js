const express = require("express");
const router = express.Router();
const User = require("../model/user");

//Create User
router.post("/", async(req, res) => {
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
// router.get("/", async(req, res) => {
//     let allUsers = await User.find();
//     res.send(allUsers);
// });

router.get("/", async(req, res) => {
    let allUsers = await User.find();
    res.render("users", {
        users : allUsers
    });
})

//read one user
router.get("/:id", async(req, res) => {
    let {id} = req.params;
    let userById = await User.findById(id);
    if(!userById){
        return res.status(400).send({error : "User not found"});
    }
    res.send(userById);
});

//delete one user
router.delete("/:id", async(req, res) => {
    let {id} = req.params;
    let userById = await User.findByIdAndDelete(id);
    if(!userById) {
        return res.status(400).send({error : "User not found"});
    }
    res.send("User deleted");
});


//update the user
router.put("/:id", async(req, res) => {
    let {id} = req.params;
    let {name, email, password} = req.body;
    let updateUser = await User.findById(id);

    updateUser.name = name;
    updateUser.email = email;
    updateUser.password = password;
    await updateUser.save();
    res.send("User updated");
});

module.exports = router;