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

`docker run -d --name site-trybe2 -p 8881:80 -v "/home/matheus_ferreira/trybe-exercicios/back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/:/usr/local/apache2/htdocs/" httpd:2.4`

Comando que vincula um volume ao container com a flag -v que recebe <PASTA-LOCAL>:<PASTA-CONTAINER> que no caso é 
 - <PASTA-LOCAL>: /home/matheus_ferreira/trybe-exercicios/back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/
 - <PASTA-CONTAINER>: /usr/local/apache2/htdocs/

 - -p 8881:80: flag que conecta a porta local com a porta do conteiner

` docker inspect site-trybe2`
Comando que verifica se ocorreu tudo bem, com o retorno sendo o seguinte

~~~
"Mounts": [
  {
    "Type": "bind",
    "Source": "/home/matheus_ferreira/trybe-exercicios/back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose",
    "Destination": "/usr/local/apache2/htdocs",
    "Mode": "",
    "RW": true,
    "Propagation": "rprivate"
  }
],
~~~

Source é onde está o volume desse container

`docker container rm -v <CONTAINER>`
Comando que remove um container junto com seu volume

