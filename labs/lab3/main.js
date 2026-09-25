/*
Purpose: create multiple server paths to access
/users, /userList, /name, /root
*/

let http = require('http')
let fs = require('fs')
let users = require('./data.js')

const PORT = 8088

// Create server + multiple paths
http.createServer((request, response) => {
    if(request.url == "/") {
        response.write("<h1>NodeJS Web Server at the root</h1>")
        response.write("<h2>Welcome to the root path at the server</h2>")
        response.end()
    }
    if(request.url == "/users"){
        // Convert data from JSON obj to JSON string
        let data = JSON.stringify(users.users.id)
        response.write(data)
        response.end()
    }
    if(request.url == "/name"){
        // HTML Header to specify the datatype being sent
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<article>Colin Joseph Miles Porter</article>")
        response.end()
    }
    if(request.url == "/userList"){
        fs.readFile(__dirname + "/employees.json", "utf-8", (error, data) => {
            response.write(data)
            response.end()
        })
    }
}).listen(PORT)
console.log("Server started at port number : ${PORT}")