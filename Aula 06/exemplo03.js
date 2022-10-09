let hoje = new Date()

console.log(hoje)

let aniversario = new Date("July 16, 1991 00:05:00")

console.log(aniversario)

var data = new Date(98, 1)

console.log(data)


let tempoDecorrido = hoje - aniversario 

console.log(tempoDecorrido)

function convertendoMilisegundos(mSeconds) {
    return (mSeconds / 31536000000).toFixed()
}

console.log(convertendoMilisegundos(tempoDecorrido))