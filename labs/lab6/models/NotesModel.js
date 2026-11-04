/*
Create a Mongo model to interact with Notes
*/

const mongoose = require("mongoose")

// Schema is a class defined with mongoose library
// To set up Collection (Table) of Documents (rows):
const noteSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["HIGH", "MEDIUM", "LOW"],
        required: true
    },
    dateAdded: { // Method: POST
        type: String,
        required: true
    },
    dateUpdated: { // Method: PUT
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Note", NotesSchema)