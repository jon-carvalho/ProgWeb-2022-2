
// Exemplo switch case
let cabelo = "branco"

switch(cabelo) {
    case "loiro":
    console.log("Você é loiro!")
    break
    case "preto":
    console.log("Você é moreno!")
    break
    case "ruivo":
    console.log("Você é ruivo!")
    break
    case "branco":
    console.log("Você é velho!")
    break
}


// exemplo for
// for(let i = 1; i <= 100; i++) {
//     console.log("=>" + i)
// }

for(let i = 1; i<=10; i++){
    console.log(`${i} x ${7} = ${i*7}`)
}



var line = "";
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line)
  line = ""
}

// exemplo while
let contagem = 0
while(contagem < 10){
    console.log("Contando: " + contagem)
    // testar sem cont++
    contagem++
}



// exemplo do while
let cont = 0
do {
    console.log("Contando: " + cont)
    // testar sem cont++
    cont++
} while(cont < 10)


// exemplo de break e continue
for(let i = 0; i <= 20; i++){
    if(i > 15)
        break

    if(i%2 == 1)
        continue

    console.log("=>" +  i) 
}