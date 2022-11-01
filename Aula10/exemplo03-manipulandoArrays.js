let numeros = [1, 4, 9]

let dobro = numeros.map(function(num){
    return num * 2
})

console.log(dobro)


let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let elevado = numeros2.map(function(num){
    return Math.pow(num, num)
})

console.log(elevado)

// ----------------------------------------------------------\\

let nomes = ["Jonatas", "Sabrina", "Ana Maria", "Joao", "Tarcisio", "Julia"]

function eNomeGrande(nome){
    return nome.length > 5
}

let nomesGrandes = nomes.filter(eNomeGrande)

console.log("Nomes grandes: " + nomesGrandes)
// ----------------------------------------------------------\\

let nomesAna = nomes.find( (nome) => nome.startsWith("Ana"))

console.log("Nomes começados com Ana: " + nomesAna)

// ----------------------------------------------------------\\

let encontrarPosicao = nomes.findIndex( (nome) => nome == "Tarcisio")

console.log(encontrarPosicao)


// ----------------------------------------------------------\\

let temAlgum = nomes.some( (nome) => nome == "Sabrina")

console.log(temAlgum)

// ----------------------------------------------------------\\

let nomesMaioresQue4letras = nomes.every( (nome) => nome.length > 4 )
    
        console.log("Nomes maiores que quatro letras => " + nomesMaioresQue4letras)

// ----------------------------------------------------------\\

let mudarValores = nomes.fill("José", 3)

console.log(mudarValores)




