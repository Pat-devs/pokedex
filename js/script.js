// API root url
const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"



// gets data from a given url param
// returns a promise with data or an error
async function getData(url) {
    const request = await fetch(url)
    const data = await request.json()

    //console.log(data)
    return data
}

let myData = getData(apiUrl)
console.log(myData)