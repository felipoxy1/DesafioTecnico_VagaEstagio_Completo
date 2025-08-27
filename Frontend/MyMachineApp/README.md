### Frontend da Plataforma de Monitoramento de Máquinas

## Visão Geral do Projeto
Este repositório contém a parte Frontend de uma aplicação que simula uma plataforma de monitoramento de máquinas pesadas. A interface, construída em Angular (TypeScript), consome uma API RESTful desenvolvida em .NET (C#), que se encontra em um repositório separado.

## Tecnologias Utilizadas
Angular 17+

TypeScript

HTML5 & CSS3

## Como Rodar o Projeto
Para que a aplicação funcione corretamente, é necessário que o Backend esteja rodando localmente. Se você ainda não o configurou, siga as instruções no repositório do backend.

Pré-requisitos: Certifique-se de que você tem o Node.js e o Angular CLI instalados.

Navegue para a pasta do projeto:

cd Frontend/MyMachineApp

Instale as dependências:

npm install

Rode a aplicação:

ng serve

O frontend estará acessível em http://localhost:4200 e se comunicará com o backend que deve estar rodando em http://localhost:5075.

## Funcionalidades Implementadas (Frontend)
Dashboard: Página principal que exibe uma tabela com todas as máquinas, incluindo um filtro por status.

Página de Cadastro: Formulário para adicionar uma nova máquina, com validação básica.

Página de Detalhes: Exibe as informações completas de uma máquina, acessada a partir do dashboard.

## Problemas e Soluções (Extras)
O desafio recomendava a implementação de um mapa para exibir a localização das máquinas. No entanto, durante o desenvolvimento, foram identificados problemas de incompatibilidade entre a versão mais recente do Angular e a biblioteca de mapas Leaflet.js.

Devido a conflitos de dependências, a implementação da funcionalidade de mapa foi descontinuada para garantir a estabilidade e o funcionamento correto da aplicação nos requisitos obrigatórios do desafio.