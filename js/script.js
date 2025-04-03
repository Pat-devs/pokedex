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

//let myData = getData(apiUrl)
//console.log(myData)

// get html elements
const mainContainerEl = document.getElementById("main-container")



// displays details about a pokemon in the mainContainerEl
function displayPokemon() {

}

// displays a list of pokemons in the mainContainerEl
function displayPokemonList(pokemonList) {

    //let onePokemon = pokemonList[0]

    //mainContainerEl.innerHTML += onePokemon.name

    pokemonList.forEach(pokemon => {
        const wrapperEl = document.createElement("div") // wrapper for each pokemon
        const pokemonName = document.createElement("h3") // for name
        const pokemonImage = document.createElement("img") // for img

        wrapperEl.append(pokemonName, pokemonImage)

        pokemonName.textContent = pokemon.name
        pokemonImage.alt = pokemon.name

        mainContainerEl.append(wrapperEl)
        // later on: img tag, list of some stats, click event to pokemom-detail-page???
    });


    
}

let testPokemonList = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    }
]


displayPokemonList(testPokemonList)