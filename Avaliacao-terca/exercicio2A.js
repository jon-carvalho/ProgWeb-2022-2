/*
Na votação do Brasil só temos segundo turno quando um dos candidatos não atinge 51% dos votos validos.
Crie um algoritmo que:
    -Caso  Bolsonaro atingir 51% dos votos o sistema deve exibir a seguinte mensagem: Bolsonaro ganhou no primeiro turno
    -Caso o Lula atingir 51% dos votos o sistema deve exibir a seguinte mensagem:
    Lula ganhou no primeiro turno
    -Caso Simone Tebet atinja 51% dos votos o sistema deve exibir a seguinte mensagem:
    Tebet ganhou no primeiro turno
    -Caso nenhuma das opções acima aconteça o sistema deve exibir a seguinte mensagem:
    Vamos ter segundo turno
*/

let bolsonaro = 0
let lula = 31
let tebet = 20



if(bolsonaro >= 51){
    console.log("Bolsonaro ganhou no primeiro turno")
} else if(lula >= 51){
    console.log("Lula ganhou no primeiro turno")
} else if(tebet >= 51){
    console.log("Tebet ganhou no segundo turno")
} else {
    console.log("Vamos ter segundo turno")
}