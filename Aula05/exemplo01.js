
function somar(a, b){
    return a + b
}

console.log("Somar ...")
console.log(somar(2,5))


function subtrair(a, b){
    return a - b
}

console.log("Subtrair ...")
console.log(subtrair(2,5))


function dividir(a, b){
    return a / b
}

console.log("Dividir ...")
console.log(dividir(2,5))


function multiplicar(a, b){
    return a * b
}

console.log("Multiplicar ...")
console.log(multiplicar(2,5))


let mediaCruzeiro = (a1, parcial, exercicio) => {
    return a1 + parcial + exercicio
}

console.log("Média Cruzeiro...")
console.log(mediaCruzeiro(4, 2, 1))

let media = (a , b, c) => (a+b+c)/3
console.log("Media " + media(20, 55, 30))





function bhaskara(a, b, c) {

    //  delta = b^2 - 4.a.c
    let delta = Math.pow(b , 2) - 4 * a * c;

    //  bhaskara =>  ( -b +- √ delta ) / 2.a
    let x1 = ( -b + Math.sqrt(delta) ) / 2 * a;

    let x2 = ( -b - Math.sqrt(delta) ) / 2 * a;

    return "O delta é " + delta + "\nAs raízes da equação são: X' = " + x1 + " X'' = " + x2;

//        Exemplo a ser testado a=1 b=12 c=-13 ... delta = 196 x'1.0 e x"= -13.0
}


console.log(bhaskara(1,12,-13))



function calculaMedia(regimental, parcial, exercicio, exame) {

    let total = regimental + parcial + exercicio

    if(total >= 6) {
        return "Aprovado"
    } if(total >= 2 && total < 6){
        
        return "Voce foi para exame, e esta:  "  + calculaExame(total, exame)
    } else {
        return "Reprovado"
    }

}



function calculaExame(notas, exame) {

    let total = notas + exame

    if(total >= 6) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }

}


console.log(calculaMedia(3, 0,2, 5))