const nota = 101;


if (nota > 100 || nota < 0) {
    notaConvertida = false;
}else if (nota >= 90) {
    notaConvertida = "A";
} else if (nota >= 80) {
    notaConvertida = "B";
} else if (nota >= 70) {
    notaConvertida = "C";
} else if (nota >= 60) {
    notaConvertida = "D";
} else if (nota >= 50) {
    notaConvertida = "E";
} else if (nota < 50 && nota >= 0) {
    notaConvertida = "F";
}

if (notaConvertida == false) {
    console.log("Erro, nota inválida");
} else {
    console.log("Sua nota final é ", notaConvertida)
}