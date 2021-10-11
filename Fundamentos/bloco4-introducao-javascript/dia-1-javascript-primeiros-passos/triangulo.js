const ang1 = 78;
const ang2 = 61;
const ang3 = 40;
const somaAngulos = ang1 + ang2 + ang3;

if (somaAngulos < 0) {
    condition = "Valor inválido";
} else if (somaAngulos == 180) {
    condition = true;
} else {
    condition = false;
}

console.log(condition);