//triangulo

let n = 8;
for (i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n*2-i-n) / 2) + "*".repeat(i));
}