const express = require("express")
const mongoose = require("mongoose")
const noteRoutes = require("./routes/NoteRoutes.js")
const DB_URL = "mongodb+srv://colinporter_db_user:5Mx8DJGMYpL0PZb7@week06cluster.vuox3ph.mongodb.net/?appName=Week06Cluster"
const PORT = process.env.PORT || 8081

const app = express()

// Middleware
app.use(express.json()) //Serves JSON files
app.use(express.urlencoded({extended: true})) //Accesses the URL params and query vals

//Root route
app.get("/", (req, res) => {
    res.send("<h2>Welcome to the Note taking application - Server root path contents</h2>")
})

// Set up the API route - does not need a folder
app.use("/api", noteRoutes)

// Connect to the MongoDB Atlas database
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the MongoDB Atlas server")
        app.listen(PORT, () =>{
            console.log(`Server is listening on port ${PORT}`)
        })
    }).catch((error) => {
        console.log("Could not connect to the DB")
        process.exit(1)
    })