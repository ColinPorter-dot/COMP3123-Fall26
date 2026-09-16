function getPromise(){
    let p1 = new Promise((resolve, reject) => {
        if (1 == 2){
            resolve("--success---")
        }else{
            reject("***errors***")
        }
    })

    return p1
}


async function getData()
{
    console.log("I am inside Async Function")
    try{
        let data = await getPromise()
        console.log(data)
    }catch(error){
        console.log(error)
    }finally{
        console.log("I am finally DONE")
    }
}

getData()