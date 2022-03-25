# Comandos utilizados

## Exercicio 1

- Crie um arquivo HTML chamado missao_trybe.html

- Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

  --- docker-compose.yaml

  ~~~
    version: '3'

    services: 
      exercicio1:
        image: httpd:2.4
        volumes:
          - "./public/:/usr/local/apache2/htdocs/"
        ports:
          - 4545:80
    
  ~~~

  - Após criar o container acesse a página HTML que está rodando no servidor em seu browser.

  - Acesse o arquivo missao_trybe.html e acrescente o seguinte texto "Nosso negócio é GENTE! #VQV";

  - Obtenha o id do container httpd:2.4;
    <br>
    `docker container -ps -a`
    <br>
    retorno
    <br>
    `93b7b80a3982`
  - Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;
    retorno
    <br>
    `docker inspect 93 `
    <br>
    retorno:
    <br>
    ~~~
      "Mounts": [
            {
                "Type": "bind",
                "Source": "/home/matheus_ferreira/trybe-exercicios/back-end/bloco-19-docker/dia-3-orquestrando-containers-com-docker-compose/exercicios/public",
                "Destination": "/usr/local/apache2/htdocs",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
    ~~~

  - Agora pare o container httpd:2.4;
  <br>
  `docker container stop 93`

  - Exclua o seu container;
  <br>
  `docker container rm 93b`

  - Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

  - Obtenha o IMAGE ID do servidor;
  <br>
  `docker image ls`
  <br>
  id da imagem
  <br>
  `b9bd7e513e0f`
  <br>
  - Depois de obter o IMAGE ID , exclua a imagem.
  <br>
  `docker image rm b9b`


## Exercicio 2/3

docker-compose.yml
~~~
version: '3'

services:
  exercicio2:
    image: ghost:1-alpine

    ports:
      - 2368:2368
    depends_on:
      - "db"
    environment:
      database__client: mysql
      database__connection__host: db
      database__connection__user: root
      database__connection__password: example
      database__connection__database: ghost
  
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: "${database__connection__password}"
      MYSQL_USER: "${database__connection__user}"
~~~
