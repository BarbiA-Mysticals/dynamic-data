const express = require('express')
//create express server inside a variable called app

const app= express()

//add body-parser to process data from forms.
const bodyParser = require('body-parser')
//Body parser nedds to be initalized.
app.use(bodyParser.urlencoded({extended: true}))
// import a package for handlebars 
//specify static routes 
app.use(express.static('public'))
const expressHandlebars = require('express-handlebars')
const { newsletterSignup } = require('./lib/handler')
//make express use the handlebars template engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

//import handlers files 
const handler = require('./lib/handler')

const PORT = process.env.port || 3000

app.get("/", (req,res)=>{
    res.render('page', {req})
})

app.post('/process', (req,res) =>{
    res.send('got post')
    console.log(req.body)
})

app.get('/process',(req,res)=>{
    console.log(req.query)
}
)

app.get('/newsletter-signup', handler.newsletterSignup)

app.post('/newsletter-signup/process', handler.newsletterSignupProcess)

app.get("/newsletter/list", handler.newsletterSignupList)

app.get('/newsletter/thankyou', (req, res) =>{
    res.render('thankyou')
})
//newsletter/details/?email=lsjdsfdjkjs a shortcut for this
app.get('/newsletter/details/:email', handler.newsletterUser)
app.get('/newsletter/delete/:email', handler.newsletterUserDelete)
app.get("/mad", (req,res) =>{
    const data = require("./data/mad-data.json")
    res.render('madform', {data})
})
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