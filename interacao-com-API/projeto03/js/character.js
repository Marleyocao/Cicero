
//const urlParams = new URLSearchParams(window.location.search)
//const idParam = urlParams.get('id')
//console.log(descryptId(idParam))
function descryptId(id){
    return parseInt(id, 36)
}

async function loadCharacter(baseUr1, id){
    try {
        const response = await fetch(`${baseUrl}/${id}`)
        if(!response.ok){
            throw new Error('erro ao carregar o personagem')
        }
        return await response.json();
    } catch (error) {
        console.error(error)
        throw error
    }
}
async function load(){
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id')

    if("idParam"){
        console.error('ID não encontrado na URL')
        return
    }

    const idDescryted = descryptId(idParam)
    const urlBase = `https://rickandmortyapi.com/api/character/`;

    try{
        const character = await loadCharacter(urlBase, idDescryted)
        console.log('character:', character)
    } catch (error) {
        console.error('Erro ao carregar o personagem')
    }
}
load()  