// -------- Hora do dia --------
let hora = 20

if(hora < 12) {
    console.log("Boa tarde!")
} else {
    console.log("Bom dia!")
}
console.log("===================================================")

// -------- Entrada na balada --------
let idade = 17

if(idade >= 18) {
    console.log("Pode entrar!")
} else {
    console.log("Volta pra casa criança!")
}

console.log("===================================================")


// -------- Aposentadoria Homens --------
// Regras aposentar por idade:  62 anos e 15 de contribuicao

let idadeH = 60
let contribuicao = 10

if(idadeH >= 62 && contribuicao >= 15){
    console.log("Parabéns, você está apto a se aposentar")
} if(contribuicao >= 35 ) {
    console.log("Parabéns, você está apto a se aposentar")
} else {
    console.log("Sinto muito você não pode se aposentar, \ntrabalhe mais ou fique mais velho e não morra!")
}

console.log("===================================================")



// -------- Entrada na balada 2 --------

let idadeB = 18
let mensagem = (idade >= 18) ? "Pode entrar!" : "Volta pra casa criança!"
console.log(mensagem)