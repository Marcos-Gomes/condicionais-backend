{
    const primeiroNome = "Mario";
    const sobrenome = "";
    const apelido = "";

    if (!primeiroNome) {
        console.log("O Nome deve ser preenchido");
    } else {
        console.log(primeiroNome);
    }
}
{
    const primeiroNome = "Mario";
    const sobrenome = "";
    const apelido = "Bros";

    if (!apelido) {
        console.log("O Apelido deve ser preenchido");
    } else {
        console.log(apelido);
    }
}
{
    const primeiroNome = "Mario";
    const sobrenome = "Bros";
    const apelido = "";

    if (!primeiroNome) {
        console.log("O nome deve ser preenchido");
    } else if (!sobrenome) {
        console.log("O sobrenome deve ser preenchido");
    } else {
        console.log(primeiroNome + " " + sobrenome);
    }
}