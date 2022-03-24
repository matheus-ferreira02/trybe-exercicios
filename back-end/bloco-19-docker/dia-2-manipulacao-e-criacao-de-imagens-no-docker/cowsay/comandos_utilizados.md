# Comandos utilizados no exercicio

## Criando Dockerfile da imagem

`FROM chuanwen/cowsay`
<br>
// imagem da imagem cowsay [documentação](https://hub.docker.com/r/mbentley/cowsay/dockerfile)

`ENTRYPOINT ["/usr/games/cowsay", "-f"]`
<br>
// comando que será executado assim que a aplicação ser executada

`CMD ["dragon-and-cow", "Vou ficar louco"]`
<br>
//

## Buildando imagem
docker build -t cowsay .
<br>
// -t: nome da imagem <NOME>
<br>
// .: local da imagem que será buildada

## Criando container a partir da imagem
docker run --rm cowsay
<br>
// run: cria um container 
<br>
// --rm: apaga o container logo após terminar de executar
<br>
// cowsay: nome da imagem em que o container vai ser criado