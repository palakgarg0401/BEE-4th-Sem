// const express = require("express");
// const app = express();

// //Queries....
// // app.get("/profile", (req, res)=>{
// //     const {username} = req.query;
// //     //find in database
// //     res.send("Profile page of " + " " + username);
// // });
// app.get("/profile", (req, res)=>{
//     const {username, age, address} = req.query;
//     //find in database
//     res.send("Profile page of " + " " + username + " " + age + " " + address + " ");
// });

// // Params...
// app.get("/profile/:username",(req,res)=>{
//     const {username} = req.params;
//     res.send("Hi"+ " "+username);
// });

// app.listen(5678, ()=>{
//     console.log("Server started.....");
// });




const express = require("express");

const app = express();

app.get("/profile",(req,res)=>{
    const {username,age,address} = req.query;

    res.send("profile page of "+" "+username+" "+age+" "+address);

});

app.listen(4020,()=>{
    console.log("Server Started..");
});

let userdata = [
    {
        id:1,
        name:"Ronak",
        address:"Jalandhar"
    },
    {
        id:2,
        name:"Yudhish",
        address:"Bathinda"
    },
    {
        id:3,
        name:"Palak",
        address:"Bathinda"
    },
    {
        id:4,
        name:"Shubham",
        address:"Haryana"
    }
]

// Get all the users..
app.get("/allusers",(req,res)=>{
    res.send(userdata);
});

// Get specific user by id..
app.get("/getuserbyId", (req,res)=>{
    let {id} = req.query;
    for(let i=0; i<userdata.length;i++){
        if(userdata[i].id==id){
            res.send(userdata[i]);
            return;
        }
    }
    res.send(`<center><h1> User Not Found</h1></center>`)
})

// Delete specific user by id..
app.get("/deleteuserbyId", (req,res)=>{
    let {id} = req.query;
    for(let i=0; i<userdata.length;i++){
        if(userdata[i].id==id){
            userdata.splice(i, 1);
            return res.send(`<center><h1> User Deleted</h1></center>`);
        }
    }
    res.send(`<center><h1> User Not Found</h1></center>`);
})

// Add a new user by id..
app.get("/adduserbyId", (req,res)=>{
    let {id, name, address} = req.query;
    let newUser = {
        id: id,
        name: name,
        address: address
    }
    userdata.push(newUser);
    res.send(`<center><h1> User Added</h1></center>`);
})

//Params..
app.get("/profile/:name", (req, res)=>{
    let {name} = req.params;
    for(let i=0; i<userdata.length; i++){
        if(userdata[i].name == name){
            res.send(userdata[i]);
            return;
        }
    }
    res.send(`<center><h1> User Not Found</h1></center>`);
});

app.get("/deleteuserbyId/:id", (req,res)=>{
    let {id} = req.params;
    for(let i=0; i<userdata.length;i++){
        if(userdata[i].id==id){
            userdata.splice(i, 1);
            return res.send(`<center><h1> User Deleted</h1></center>`);
        }
    }
    res.send(`<center><h1> User Not Found</h1></center>`);
});

app.get("/adduserbyId/:id/:name/:address", (req,res)=>{
    let {id, name, address} = req.params;
    let newUser = {
        id: id,
        name: name,
        address: address
    }
    userdata.push(newUser);
    res.send(`<center><h1> User Added</h1></center>`);
});
