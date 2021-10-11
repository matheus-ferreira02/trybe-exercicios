let estado = "lista"

switch (estado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada");
        break;
    case "reprovada":
        console.log("Infelizmente você foi reprovado");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    default:
        console.log("Não se aplica");
        break;
}