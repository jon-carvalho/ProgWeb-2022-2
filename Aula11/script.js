
const bd = `{
    "alunos": [
      {
        "nome": "Joao",
        "rgm": 299,
        "avaliacaoParcial": 2,
        "exercicio": 1,
        "avaliacaoRegimental": 2,
        "img": "./imgs/joao"
      },
      {
        "nome": "Maria",
        "rgm": 123,
        "avaliacaoParcial": 2,
        "exercicio": 2,
        "avaliacaoRegimental": 5,
        "img": "./imgs/maria"
      },
      {
        "nome": "Julia",
        "rgm": 567,
        "avaliacaoParcial": 0,
        "exercicio": 1,
        "avaliacaoRegimental": 0,
        "img": "./imgs/julia"
      },{
        "nome": "Marcos",
        "rgm": 980,
        "avaliacaoParcial": 3,
        "exercicio": 1,
        "avaliacaoRegimental": 1,
        "img": "./imgs/marcos"
      },{
        "nome": "Carla",
        "rgm": 980,
        "avaliacaoParcial": 3,
        "exercicio": 1,
        "avaliacaoRegimental": 1,
        "img": "./imgs/carla"
      }
    ]
  }`

function exibirAlunos(){

    const objs = JSON.parse(bd)

    // console.log(objs)
    // console.log(objs.alunos[0])
    let resultado = document.getElementById("resultado")

    objs.alunos.forEach(element => {

        console.log(element.avaliacaoParcial)

        let media = parseFloat(element.avaliacaoParcial) + parseFloat(element.exercicio) + parseFloat(element.avaliacaoRegimental)
        console.log("media => " + media)
        let status = ""

        if(media >= 6){
            status = "Aprovado"
        } else if(media >= 2 && media < 6){
            status = "Avaliaçao Final"
        } else {
            status = "Reprovado"
        }

        console.log(element)
        resultado.innerHTML +=
        `<div class="container">
        <img src="${element.img}.jpeg" alt="">
        <p><b>Nome:</b> ${element.nome}</p>
        <p><b>RGM:</b> ${element.rgm}</p>
        <p><b>Av. Parcial:</b> ${element.avaliacaoParcial}</p>
        <p><b>Exercicios:</b> ${element.exercicio}</p>
        <p><b>Av. Regimental:</b> ${element.avaliacaoRegimental}</p>
        <p><b>Média:</b> ${media}</p>
        <p><b>Status:</b> ${status}</p>
    </div>`
    });



    
}