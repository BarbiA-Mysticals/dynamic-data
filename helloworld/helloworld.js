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
//callback is a function which executes after something else has completed. 
//where application lives, in the server. 
const server = http.createServer((request,response) => {
    console.log("**********************************************************")
    console.log("**********************************************************")

    console.log(request.url) ?? // Route a path that gets you to a system, used to organize your site
    console.log(request.method) //  GET POST PUT DELETE, put update but is similar to post 
    // GET => READ OPERATION OF A DATABASE 
    //POST => CREATE ""
    // PUT => UPDATE 
    // DELETE => DELETE

    // How to respond to requests 
    // ROUTING 
    if(request.url == "/"){
        //execute statement 
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.end("home page")
    } 

    else if(request.url == "/contact"){
        //execute statement 
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.end('Contact Page')
    } 

    else if(request.url == "/gallery"){
        //execute statement 
        response.writeHead(200,{'Content-Type':'text/HTML'})
         response.end("<html><head><title>Page Title</title>,/head><body><h1>My First HTML response, pro web developer</h1></body></html>")
    }
    else if(request.url == "/about"){
        //execute statement 
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.end('about page')
    }
    else{
        response.writeHead(400,{'Content-Type':'text/plain'})
        response.end('PAGE NOT FOUND ERROR 400')

    } //Use switch to simplify this 
     // use or: || if two statements give the same output

    // Basic conditions 
    /**
     * Equals : == (equals sign twice because = is assigment operator)
     * Not Equal: if a != b
     * Greater than: if a > b 
     * Less than: if a < b 
     * Greater ot equal if a >= b
     * Less than or equal: if a <= b
     */


    console.log("Responding to request")
    

    console.log("**********************************************************")
    console.log("**********************************************************")
    
})
// run server
server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT}  ` + 'press CTRL-C to terminate...'))

// to run file you can use the pattern or part and add asterisk