let resultado = ""


for(let i=1; i<=6; i++) {
    let nroSorteado = Math.floor(Math.random() * 100)

    if(nroSorteado < 10){
        resultado += ("0" + nroSorteado + " ");
    } else {
           resultado += (nroSorteado + " ");
    }
}

console.log("Mega Sena: " + resultado)