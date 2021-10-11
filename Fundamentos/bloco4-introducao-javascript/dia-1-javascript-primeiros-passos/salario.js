let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    salarioINSS = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioINSS = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2494.93 && salarioBruto <= 5189.82) {
    salarioINSS = salarioBruto - (salarioBruto * 0.11);
} else if (salarioBruto >= 5189.82) {
    salarioINSS = salarioBruto - 570.88;
}

if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS;
} else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    aliquota = 0.075 * salarioINSS - 142.80;
} else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    aliquota = 0.15 * salarioINSS - 354.80;
} else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    aliquota = 0.225 * salarioINSS - 636.13;
} else {
    aliquota = 0.275 * salarioINSS - 869.36;
}

salarioLiquido = salarioINSS - aliquota;

console.log("O salário liquido de R$", salarioBruto, "é igual a R$", salarioLiquido);