// few ways of declaring variables 
 var name = "John"
 var age = 23.5
 // let is a safe way of program, if error doesn't run. Understan if is a variable dependant
 let lastName = "Smith"
 const year = 2024
 // const won't change, understand the semantics 



const http = require('http')
// node runs in ports, like a phine number to do specific things. Default web servers ports are 80, 8888, 8080
const PORT = process.env.PORT || 3000
//Java Object Notatio JSON 
var printer = {
    color:"black",
    size:"small",
    price:29.99
}

//where application lives, in the server. 
const server = http.createServer((request,response) => {
    console.log(request)
    console.log("Responding to request")
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('Hello World')
    
})
// run server
server.listen(PORT, ()=> console.log(`server started on port ${PORT}; ` + 'press CTRL-C to terminate...'))