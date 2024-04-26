const axios = require('axios')
const { default: expect } = require('expect')
const { test } = require('picomatch')

async function ApiDogs() {
    const response = axios.get('https://ranekapi.origaamid.dev/json/api/produto')

    return response.data
}

test('Verifica se obtem os dados corretamente', async () =>{
    const data = await ApiDogs();
    expect(dados).toBeDefined();
})