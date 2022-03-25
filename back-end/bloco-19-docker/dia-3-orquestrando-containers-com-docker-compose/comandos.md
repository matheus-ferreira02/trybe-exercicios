#Comandos utilizados no dia

`docker netword ls`
<br>
Comando para listar as redes do docker

`docker container run -ti --link container1 --name container2 busybox`
<br>
 - --link container1: comando para conectar containers, no caso o container1 com o container2

`docker network create -d bridge minha-rede`
<br>
Comando para criar uma rede do tipo bridge com o nome minha-rede

`docker container run -itd --network minha-rede --name meu-container busybox`
Comando que cria um container ja dentro da rede
 - -itd: cria no modo interativo em segundo plano
 - -network minha-rede: rede em que o container vai ser criado
 - busybox: nome da imagem

`docker network connect minha-rede meu-container`
Comando que conecta um container já criado a uma rede com o nome da rede primeiro e o container depois

`docker network disconnect minha-rede meu-container`
Comando que desconecta um conteiner da rede

