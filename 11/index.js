{
    //renda mensal do aluno, em centavos.
    const rendaMensalEmCentavos = 300000;

    // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
    const mesesDecorridos = 12;

    // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
    const totalJaPagoPeloAluno = 1000000;

    if (rendaMensalEmCentavos < 200000) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    } else if (rendaMensalEmCentavos >= 20000) {
        const valorParecela = (rendaMensalEmCentavos * (18 / 100) / 100);
        if (totalJaPagoPeloAluno >= 18000000 || mesesDecorridos > 60) {
            console.log("O aluno não deve mais nada");
        } else {
            console.log(`O valor da parcela desse mês é R$ ${valorParecela} reais`)
        };
    }
}
{
    //renda mensal do aluno, em centavos.
    const rendaMensalEmCentavos = 150000;

    // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
    const mesesDecorridos = 12;

    // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
    const totalJaPagoPeloAluno = 1000000;

    if (rendaMensalEmCentavos < 200000) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    } else if (rendaMensalEmCentavos >= 20000) {
        const valorParecela = (rendaMensalEmCentavos * (18 / 100) / 100);
        if (totalJaPagoPeloAluno >= 18000000 || mesesDecorridos > 60) {
            console.log("O aluno não deve mais nada");
        } else {
            console.log(`O valor da parcela desse mês é R$ ${valorParecela} reais`)
        };
    }
}