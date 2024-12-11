let eList = require('../data/emails.json')
// to write or create files we need node's file system fs
const fs = require('fs')
//create your fuctions 

exports.newsletterSignup = (req, res) =>{
    res.render('newsletter-signup', {csrf: 'supersecretcode'})
}

exports.newsletterSignupProcess =  (req,res) => {
    console.log(req.body)
    //to store data 
    //first create a new user variable 

    var newUser ={
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "address":req.body.address,
        "state":req.body.city,
        "zip":req.body.zip,
        "email":req.body.email,

    }

    console.log("Cleaned User")
    console.log(newUser)
    eList.users.push(newUser)

    //we need to turn eList value into text to write
    var json = JSON.stringify(eList)
    console.log(json)
    fs.writeFileSync('./data/emails.json',json,'utf8',()=>{
        console.log("finished writing file")
    })
   
    console.log("current eList")
    console.log(eList)
    res.redirect(303,'/newsletter/thankyou')
}

exports.newsletterSignupList = (req,res) =>{
    eList =  require('../data/emails.json')
    console.log(eList)
    res.render('userpage', {"users": eList.users})
}

exports.newsletterUser = (req, res) =>{
    var userDetails = eList.users.filter((user)=>{
        return user.email == req.params.email
    })
    res.render('userdetails',{"users":userDetails}) //javascript
}

exports.newsletterUserDelete = (req, res) =>{
    var newUsers = {"users":[]}
    newUsers.users = eList.users.filter((user)=>{
        return user.email != req.params.email
    })

    var json = JSON.stringify(newUsers)

    fs.writeFileSync('./data/emails.json',json,'utf8',()=>{
        console.log("finished writing file")
    })

    res.send('<a href="/newsletter/list">GO BACK</a>')

}
