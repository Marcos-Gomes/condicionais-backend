//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

console.log(`Restam ${(valorDoProduto - valorPago) / valorDoProduto * quantidadeDoParcelamento} parcelas de R$ ${(valorDoProduto / quantidadeDoParcelamento) / 100}`)
