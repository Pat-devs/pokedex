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
async function displayPokemonDetails(data) {
    
    const pokemonDetails = await getData(data.url)
    const pokemonImageUrl = pokemonDetails.sprites.other["official-artwork"].front_default

    console.log(pokemonDetails)

    const wrapperEl = document.createElement("div") // wrapper for each pokemon
    wrapperEl.style = "outline: 2px solid blue;"
    const pokemonName = document.createElement("h3") // for name
    const pokemonImage = document.createElement("img") // for img

    wrapperEl.append(pokemonName, pokemonImage)

    pokemonName.textContent = data.name
    pokemonImage.alt = data.name
    pokemonImage.src = pokemonImageUrl
    pokemonImage.style = "width: 40%;"

    // clear the page, and display the pokemon
    mainContainerEl.innerHTML = ""
    mainContainerEl.append(wrapperEl)
}

// displays a list of pokemons in the mainContainerEl
// function receives a promise object
async function displayPokemonList(pokemonListPromise) {

    const pokemonList = await pokemonListPromise

    // TODO: forEach currently appends one and one pokemon to the page. We should try to append only once.
    // NOTE: array methods run in the backgrouind, and thus the order is not guaranteed. To get correct order (we should) use a normal for loop, or a for-of-loop
    // pokemonList.results.forEach(async (pokemon) => {
        
    // });

    for (const pokemon of pokemonList.results) {
        // get additional pokemon data (like image url):
        //console.log(pokemon)
        const pokemonExtraData = await getData(pokemon.url)
        const pokemonImageUrl = pokemonExtraData.sprites.other["official-artwork"].front_default

        const wrapperEl = document.createElement("div") // wrapper for each pokemon
        wrapperEl.style = "outline: 2px solid blue;"
        const pokemonName = document.createElement("h3") // for name
        const pokemonImage = document.createElement("img") // for img

        wrapperEl.append(pokemonName, pokemonImage)

        pokemonName.textContent = pokemon.name
        pokemonImage.alt = pokemon.name
        pokemonImage.style = "width: 40%;"
        pokemonImage.src = pokemonImageUrl
        // add click event to the wrapperEl
        wrapperEl.addEventListener("click", () => displayPokemonDetails(pokemon))

        mainContainerEl.append(wrapperEl)
        // TODO: img tag, list of some stats, click event to pokemom-detail-page???
    }


    
}

/* let testPokemonList = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    }
] */


displayPokemonList(getData(apiUrl))