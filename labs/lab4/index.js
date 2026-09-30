/*
Purpose: use Express framework with Node.js
Try GET, POST, PUT, DELETE methods
- use routes instead of pure paths
- like an API in your own software's backend
Compare/contrast GET query vs params
*/

const express = require("express");
const app = express()

const SERVER_PORT = process.env.PORT || 3000;

// Middleware setup for each of our needs on the web server
// Serving static files:
// - Public folder is not usually accessible by default
// - No real "static" folder, but it is a valid URL path
app.use("/static", express.static("public"))

// Serving  JSON:
app.use(express.json())

// Serving traditional HTML body:
// - If you add the obj param with property "extended: true",
// - you can use the library qs instead of library querystring
app.use(express.urlencoded({ extended: true }))

// ------------------------------------------------------------

// http://localhost:3000
app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root path of the server</h1>")
})

// http://localhost:3000/hello
app.get("/hello", (request, response) => {
    response.status(200).send("<h1>Welcome to the path of /hello</h1>")
})

app.get("/college", (request, response) => {
    const college = {
        method: "GET", // made-up: this property is NOT built-in
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    response.json(college) // we treat our backend as an API
})

app.get("/students/:name/:age/:city", (request, response) => {
    console.log(request.params)
    if(!request.params.name || !request.params.age || !request.params.city){
        response.status(400).json({error: "Missing path parameter"})
    }
    const name = request.params.name
    const age = request.params.age
    const city = request.params.city

    response.json({
        student_name: name,
        student_age: age,
        student_city: city
    })
})

app.post("/college", (request, response) => {
    const college = {
        method: "POST", // made-up: this property is NOT built-in
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    response.json(college)
})

app.put("college", (request, response) => {
    const college = {
        method: "PUT", // made-up: this property is NOT built-in
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    response.json(college)
})

app.delete("college", (request, response) => {
    const college = {
        method: "DELETE", // made-up: this property is NOT built-in
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    response.json(college)
})

app.listen("SERVER_PORT", () => {
    console.log("Server is running on http://127.0.0.1:" + SERVER_PORT)
})