# Mentoria Técnica - Leitura de arquivos com módulo fs do Node.js


## Contexto:

 Você foi a pessoa contratada para migrar o sistema de uma loja física para um ecommerce, porém essa loja usa um software muito antigo que registra todas vendas em arquivos _txt_. Pensando como pessoa desenvolvedora, você decidiu automatizar essa tarefa, usando o **módulo fs** do Node.js para ler as informações desses arquivos, convertê-las em um _json_ e assim enviar tudo para ser consumida por uma API.

---

## 🗒 Desenvolvimento:
 Objetivo: Criar um arquivo _json_, onde será salvo os dados que estão contidos nos arquivos _txt_

 Exemplo do Resultado Esperado:
  - arquivo1.txt: nome cliente 1 - Pedrão rei do Vava
  - arquivo2.txt: compra cliente 1 - Macbook Pro M1, Headset Razer

  - resultado.json: 
    { "nome cliente 1": "Pedrão rei do Vava", "compra cliente 1": "Macbook Pro M1, Headset Razer"}

 Exercicio: Criar uma solução para nosso problema usando:

  - Callback
  - Promise