/*
Em uma variavel chamada nome insira seu nome, e em uma variavel chamada rgm insira os 3 ultimos digitos do seu rgm.
Realize uma divisão dos digitos do seu rgm pelo número de letras do seu nome.
E crie um laço de repetição que deverá imprimir seu nome o tanto de vezes que for o resultado da divisão
*/ 

let nome = "Jonatas"
let rgm = 999



    let divisao = rgm / nome.length

    console.log(divisao)


    for(let i=1; i<=divisao; i++){
        console.log(i + " - " + nome)
    }