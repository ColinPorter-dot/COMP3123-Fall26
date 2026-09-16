/*
Purpose:
Fetch from a 3rd party API and print out results
*/
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        return response.json()
    })
    .then((dataJSON) => {
        console.log(dataJSON)
    })
    .catch((error) => {
        console.log(error)
    })