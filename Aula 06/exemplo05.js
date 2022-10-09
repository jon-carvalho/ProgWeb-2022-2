let numeros = new Array(15, 23, 18, 37, 49, 72, 103, 15)

let ocorrencia = numeros.indexOf(103, 0)

console.log(ocorrencia)

let ultimaOcorrencia = numeros.lastIndexOf(15)

console.log(ultimaOcorrencia)


let dobro = numeros.map(function(item) {
    return item * 2
})

console.log(dobro)