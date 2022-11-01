let vetor01 = new Array()

let vetor02 = []

let vetor03 = new Array("laranja", "vermelho", "verde", "cinza")

// ------------------------------------

let carros = []

carros[0] = "fusca"
carros[1] = "voyage"
carros[2] = "vectra"

console.log(carros)
console.log(carros[2])
// console.log(carros[3])


carros.push("kombi")
carros.push("uno, gol, astra")

console.log(carros)

carros.pop()

console.log(carros)

carros.shift()

console.log(carros)

carros.unshift("prisma")

console.log(carros)


for(let i=0; i< carros.length; i++) {
    console.log("For: " + carros[i])
}

for(let car of carros) {
    console.log("for .. of " + car)
}


let cores = new Array("laranja", "vermelho", "verde", "cinza")

let carroCor = carros.concat(cores)

console.log(carroCor)

let revertido = carroCor.reverse()

console.log(revertido)

let ordenado = carroCor.sort()

console.log(ordenado)

let emTexto = carroCor.toString()
console.log(emTexto)

// remove 2 elementos a partir da 3 posicao
let removendo = carroCor.splice(3, 2)

console.log(removendo)

var carrosNacionais = carros.forEach(adicionarNacionalidade)

function adicionarNacionalidade(element){   
    console.log(element + " nacional")
}

