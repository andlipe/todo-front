# Todos Front
## Qual objetivo do projeto
Esse projeto visa criar um front-end para consumir a [APIs de Todos](https://github.com/andlipe/todos-api) 
## Tecnologias Utilizadas

React.JS - Escolhi utilizar por ser em uma biblioteca da linguagem que mais tenho conhecimento e já estava estudando. 


# Como utilizar a ferramenta

## Requisitos
- Docker e Docker Compose instalados na máquina.
- Ter a API de Todos rodando na porta 3030 ou alterar a baseURL no arquivo /src/services/api.js
### Windows e Mac
O docker pode ser baixado diretamente no [site oficial](https://www.docker.com/get-started).
### Distribuições Linux
É necessário fazer a instalação do Docker e do Docker Compose por serem pacotes separados.  
O tutorial para instalação pode ser encontrado na documentação oficial.
* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Docker Compose](https://docs.docker.com/compose/install/)
## Como executar?
Primeiro clonamos esse repositório  
> git clone https://github.com/andlipe/todo-front.git  

Precisamos subir o container com o comando  
> docker-compose up --build -d

Pronto o ambiente vai estar disponível na porta 3000 por padrão.


