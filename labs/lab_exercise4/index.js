const express = require("express");
const app = express()
let http = require('http')

const SERVER_PORT = process.env.PORT || 3000

app.use(express.static("public"))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

http.createServer(app).listen(SERVER_PORT, () => {})

// A GET request to /hello that returns "Hello Express JS".
app.get("/hello", (req, res) => {
    res.status(200).send("<h1>Hello Express JS</h1>")
})

// A GET request to /user with query parameters for firstname and lastname.
app.get('/user', (req, res) => {
    
    let response = {
      first_name:req.query.first_name || "No first name provided",
      last_name:req.query.last_name || "No last name provided"
    };
    
    console.log(response);
    res.end(JSON.stringify(response));
});
// A POST request to /user with path parameters for firstname and lastname.
app.post("/user/:firstname/:lastname", (req, res) => {
    if(!req.params.firstname || !req.params.lastname){
        res.status(400).json({error: "Missing path parameter"})
    }
    const firstname = req.params.firstname
    const lastname = req.params.lastname

    res.json({
        user_fname: firstname,
        user_lname: lastname
    })
})
// A POST request to /users with body parameter for array of users firstname and lastname.
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : 
  [
    { "firstname": "Pritesh", "lastname": "Patel" },
    { "firstname": "John", "lastname": "Doe" },
    { "firstname": "Colin", "lastname": "Porter" }
  ];
  res.json(users);
});

app.listen("SERVER_PORT", () => {
    console.log("\`Server running on http://localhost:\${SERVER_PORT}\`")
})