# Projeto que consume a Teravoz API

Projeto que visa simular o consumo da `Teravoz API`.
O projeto foi desenvolvido utilizando `NodeJS` e `serverless`.

## Rodando o Projeto
Selecione `Launch Serverless Offline` no launch do `vscode` e rode o projeto.

## Serviços expostos

### POST /webhook
Serviço que recebe os updates da `Teravoz API`
Delegate é ativado quando é passado `type=call.standby` no body da chamada

### GET /call/active
Serviço que retorna as chamadas ativas.
Essas chamadas estão sendo gravadas no arquivo `\test\mock\activeCalls.json`, contido no projeto.