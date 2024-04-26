test("Verifica palavra dentro de um array", () => {
    const cestaDeFrutas = ['Pera','Uva','Maça', 'Melancia']

    expect(cestaDeFrutas).toContain('Uva')
})

test("Verifica se não há cargo de gerente entre os funcionarios", () => {
    const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coordenador']

    expect(cargos).not.toContain('Gerente')
});

test("Verifica se há a palavra 'Senai' ", () => {
    const frase = "O Senai é o melhor lugar do mundo para passar nossas manhãs!"

    const fraseMaiuscula = frase.toUpperCase()

    expect(fraseMaiuscula).toMatch(/SENAI/)
})