const currentHour = 16;
let message;

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else {
    message = "Faça o que quiser !!!"
}

console.log(message)