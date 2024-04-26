//"characters": "https://rickandmortyapi.com/character",
//"locations":  "https://rickandmortyapi.com/location",
// "episodes":  "https://rickandmortyapi.com/episode"
const page = 2
const baseUr1 ='https://rickandmortyapi.com/api'

const loadCharacter = async () =>{
    const res = await fetch(`${baseUr1}/location`)
    const data = await res.json()
    const limidata = data.results.slice(0,6)
    return {results: limidata}
}
const loadLocation = async () =>{
    const res = await fetch(`${baseUr1}/location`)
    const data = await res.json()
    const limidata = data.results.slice(0,6)
    return {results: limidata}
}


const loadEpisode = async () =>{
    const res = await fetch(`${baseUr1}/episode`)
    return await res.json()
}

const loadAllwithPromiseAll = async () =>{
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode()
    ])
    showcharacter("character"+character+results)
    console.log("location"+location)
    console.log("episode"+episode)
}

loadAllwithPromiseAll()

function showCharacter(character){
   const characterContainer = document.getElementById("character-container");
   characters.map((character)=>{
    const divCharacter = document.createElement('div')
    divCharacter.innerHTML =`
    <img src="${character.image}" alt="imagem do personagem">
    <article>
    <h3>${character.name}</h3>
    <span>${character.status} - ${character.species}</span>

    <span class="location">Location:</span>
    <a href="${character.location.url}">${character.location.name}</a>

    <span class="origin">Origin:</span>
    <a href="${character.origin.url}">${character.origin.name}</a>
    </article>
    `;
    divCharacter.classList.add('character-box');
    characterContainer.appendChild(divCharacter);
    divCharacter.addEventListener('click' ,async() =>{
        characterDetails(character.id)
    })
   });
}

function characterDetails(id){
    const idCrypted = encryptId(id)

    window.location.href = `./page/character.html?id=${idCrypted}`
}

function encryptId(id){
    return id.toString(36)
}

function showLocation(locations){
    const locationContainer = document.getElementById
    ('location-container')
    locations.map((location)=>{
        const divLocation = document.createElement('div')
        divLocation.innerHTML=`
        <p class="title">${location.name}</p>
        <p class="type">${location.type}</p>
        <p class="dimension">${location.dimension}</p>
        <p class="residents">${location.residents.lengh}</p>`;

        divLocation.classList.add('location-box')
        locationContainer.appendChild(divLocation)
    })
    console.log(locations)
}