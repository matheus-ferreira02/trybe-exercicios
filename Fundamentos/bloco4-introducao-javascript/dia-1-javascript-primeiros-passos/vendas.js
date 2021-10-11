const valorCusto = 100;
const impostoSobreCusto = 0.2 * valorCusto;
const valorCustoTotal = valorCusto + impostoSobreCusto;
const valorVenda = 154;
const lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro, valores de entrada abaixo de 0");
} else {
    console.log("O lucro da venda será de R$", lucro);
    console.log("Caso venda 1000 produtos, o lucro sera de R$", lucro * 1000);
}