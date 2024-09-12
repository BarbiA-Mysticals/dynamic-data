

const http = require('http') // puts the required module into a costant called http
//in order to access local files, we nedd to work with the file system

const fs = require("fs")
// node runs in ports, like a phine number to do specific things. Default web servers ports are 80, 8888, 8080
const PORT = process.env.PORT || 3000
//callback is a function which executes after something else has completed. 
//where application lives, in the server. 
//syntaxt to create a function

const funtionName = (parameter1, parameter2, parameter3) =>{
    // write fuction code
    console.log("FfuctionName was called")
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
}
//Create fuction to read files and display them
const displayPage = (path,res,contenType, responseCode=200) =>{
    fs.readFile(__dirname+path, (errors, content) =>{
        if(errors){
            res.writeHead(500, {'content-type': 'text/plain'})
            return res.end ('500 - Internal Error')
        }
        res.writeHead(responseCode,{'content-type': contenType})
        res.end(content)
    })
    //"/public/home.html"
}
const server = http.createServer((request,response) => {
   console.log(request.url)  // Route a path that gets you to a system, used to organize your site
   console.log(request.method) //  GET POST PUT DELETE, put update but is similar to post 

   // How to respond to requests 
   var path = request.url
   // ROUTING 
  switch(path){
    case '':
    case '/':
        displayPage('/public/home.html',response,'text/html')
    break
    case '/about':
        displayPage('/public/about.html',response,'text/html')
    break
    case '/contact':
        displayPage('/public/contact.html',response,'text/html')
    break
    case '/logo':
        displayPage('/public/image.jpg',response,'image/jpg')
    break
    default:
        displayPage('/public/404.html',response, 'text/html', 404)
    break


  }

   console.log("Responding to request")
})
// run server
server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT}  ` + 'press CTRL-C to terminate...'))

// to run file you can use the pattern or part and add asterisk