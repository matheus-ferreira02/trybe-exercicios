const peca = "Cavalo".toLowerCase();

switch (peca) {
    case "rei":
        console.log("Move-se para qualquer casa adjacente");
        break;
    case "rainha":
        console.log("Move-se verticalmente, horizontalmente ou diagonalmente");
        break;
    case "bispo":
        console.log("Move-se para a diagonal");
        break;
    case "torre":
        console.log("Move-se para a horizontal e vertical");
        break;    
    case "cavalo":
        console.log("Move-se duas casas horizontalmente ou verticalmente e então uma casa a mais em um angulo reto");
        break;
    case "peão":
        console.log("Move-se para frente, captura na diagonal");
        break;
    default:
        console.log("Erro! peça inválida.");
        break;
}