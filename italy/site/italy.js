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
// Import app-wide data
const gallery = require("./data/gallery.json")
//process route, before error
app.get('/',(request,response)=>{
    console.log(gallery)
    //import page specific data
    const data = require("./data/home-data.json")
    response.render('landing', {
        gallery, 
        data
    })
        
})

// Florence age route
app.get('/florence',(request,response)=>{
    console.log(gallery)
    //import page specific data
    const data = require("./data/florence.json")
    response.render('landing', {
        gallery, 
        data
    })
})
// Milan page route

app.get('/milan',(request,response)=>{
    console.log(gallery)
    //import page specific data
    const data = require("./data/milan.json")
    response.render('landing', {
        gallery, 
        data
    })
})
//Rome page route
app.get('/rome',(request,response)=>{
    console.log(gallery)
    //import page specific data
    const data = require("./data/rome.json")
    response.render('landing', {
        gallery, 
        data
    })
})
// Venice page route

app.get('/venice',(request,response)=>{
    console.log(gallery)
    //import page specific data
    const data = require("./data/venice.json")
    response.render('landing', {
        gallery, 
        data
    })
})
//Handle error first

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

app.listen(PORT, ()=>{
    console.log(`express is running on http://localhost:${PORT} `)
    console.log('Press ctrl-c to terminate')
})