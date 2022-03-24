# Criando Dockerfile da imagem

FROM chuanwen/cowsay 
// imagem

ENTRYPOINT ["/usr/games/cowsay", "-f"]
// comando que será executado assim que a aplicação ser executada

CMD ["dragon-and-cow", "Vou ficar louco"]
//

# Buildando imagem
docker build -t cowsay .
// -t: nome da imagem <NOME>
// .: local da imagem que será buildada

# Executando imagem
docker run --rm cowsay
// run: cria um container 
// --rm: apaga o container logo após terminar de executar
// cowsay: nome da imagem em que o container vai ser criado