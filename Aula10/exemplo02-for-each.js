let carros = ["999 - Ferrari 488", "10 - Fusca", "999 - Lamborghini Murciélago", 
    "999 - Audi R8", "10 -Brasilia"]

let carrosVelozes = []

carros.forEach(
    (item) => {

        if(item.startsWith("999")){
            console.log(item.substring(6) + " foi adicionado para grupo de carros velozes")
            carrosVelozes.push(item)
        } 
    }
)

console.log("CARROS VELOZES: " + carrosVelozes)


