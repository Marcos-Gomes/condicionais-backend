const ladoA = 3;
const ladoB = 3;

//seu código aqui

if (ladoA === ladoB) {
    if (ladoA == 0 && ladoB == 0) {
        console.log("Bucha de branco")
    } else if (ladoA == 1 && ladoB == 1) {
        console.log("Bucha de Ás");
    } else if (ladoA == 2 && ladoB == 2) {
        console.log("Bucha de Duque");
    } else if (ladoA == 3 && ladoB == 3) {
        console.log("Bucha de Terno");
    } else if (ladoA == 4 && ladoB == 4) {
        console.log("Bucha de Quadra");
    } else if (ladoA == 5 && ladoB == 5) {
        console.log("Bucha de Quina");
    } else if (ladoA == 6 && ladoB == 6) {
        console.log("Bucha de Sena");
    }
} else {
    console.log("NÃO");
}