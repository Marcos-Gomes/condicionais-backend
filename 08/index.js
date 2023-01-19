const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

/*- Menores de 12 anos
- Maiores de 65 anos
- Que possuam qualquer patologia cardíaca
- Menores de 150cm de altura */

if (possuiPatologia === !false) {
    console.log("ACESSO NEGADO");
} else if (idade < 15 || idade > 65 || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (idade >= 15) {
    if (ehEstudante === !false) {
        console.log("10 reais");
    } else if (ehEstudante === false) {
        console.log("20 reais");
    }
}