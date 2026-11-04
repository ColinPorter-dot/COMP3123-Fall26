/*
Set up paths (routes) to the different URLs that the server handles
POST, PUT, GET, DELETE
*/
const notesModel = require("./models/NotesModel.js")
const express = require("express")
const router = express.Router()

router.post("./notes", async (req, res) => {
    // Validate request
    if(!req.body.content){
        //JSON body passed through method
        return res.status(400).send({
            message: "Note cannot be empty, fill in the request body"
        })
    }

    // If request is valid
    try{
        const note = new NotesModel({
            content: req.body.content.noteTitle,
            noteDescription: req.body.content.noteDescription,
            priority: req.body.content.priority,
            dateAdded: req.body.content.dateAdded,
            dateUpdated: req.body.content.dateUpdated
        })
        const savedNote = await note.save()
        res.status(201).send(savedNote)
    } catch (error) {
        res.status(500).send({ message: error.message || "We don't know what went wrong" })
    }
})
/*
router.get(async (req, res) => {

})

router.get(async (req, res) => {

})

router.get(async (req, res) => {

})

router.put(async (req, res) => {

})

router.delete(async (req, res) => {

})
*/
module.exports = router