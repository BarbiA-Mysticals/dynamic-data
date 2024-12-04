// Run the following commsnfd in terminal:
//npm intall express
//npm install express-handlebars
//if errors run sudo

// imports express into our project
const express = require('express')
//create express server inside a variable called app

const app= express()
// import a package for handlebars 
//specify static routes 
app.use(express.static('public'))
const expressHandlebars = require('express-handlebars')
//make express use the handlebars template engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const PORT = process.env.port || 3000


//setup routes
//homepage 
app.get("/", (req,res)=>{
    const data = require('./data/homepage.json')
    res.render('homepage', {data})
})

app.get("/about", (req,res)=>{
    const data = require('./data/about.json')
    res.render('page', {data})
})

app.get("/category1", (req,res)=>{
    const data = require('./data/category_1.json')
  
    res.render('category', {data})
   

})

app.get("/category2", (req,res)=>{
    const data = require('./data/category_2.json')
    res.render('category', {data})
})

app.get("/category3", (req,res)=>{
    const data = require('./data/category_3.json')
    res.render('category', {data})
})

//details page 
app.get("/category1/details/:id", (req,res)=>{
    const data = require('./data/category_1.json')
    //filter to get data that matches id
    console.log(data)
    var tempData = {"products":[]}
    tempData.products = data.products.filter((product)=>{
        return product.id == req.params.id
    })

    console.log("data")
    console.log(data)
    
   
    res.render('details', {"data":tempData})

})

let cart = {"products":[]}

app.get("/cart", (req,res)=>{
    if(typeof(req.query.id) != "undefined"){
        cart.products.push(req.query)
        console.log(req.query.name)
    }else{
        console.log(req)
        console.log(req.query.id)
        console.log(req.query.name)

    }
    res.render("cart",{"products":cart.products})
})



//errors 

//NOT FOUND!
app.use((request, response)=>{
   
    response.status(404)
    response.render('404')
})

//SERVER ERROR :(
app.use( (error,request,response,next)=>{
    console.log(error.message)
    
    response.status(500)
    response.render('500')
})

//Call server

app.listen(PORT, ()=>{
    console.log(`express is running on http://localhost:${PORT} `)
    console.log('Press ctrl-c to terminate')
})