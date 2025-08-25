# 🚜 Plataforma de Monitoramento de Máquinas  

Aplicação **Full Stack** que simula uma plataforma de monitoramento de máquinas pesadas. O sistema é composto por um **Backend em .NET (C#)** e um **Frontend em Angular (TypeScript)**, que se comunicam via **API RESTful**.  

O objetivo é atender aos requisitos de **cadastro, consulta e visualização de dados de telemetria de máquinas**, demonstrando conhecimentos em ambas as tecnologias.  

---

## 🛠️ Tecnologias Utilizadas  

### Backend  
- [.NET 8](https://dotnet.microsoft.com/)  
- [ASP.NET Core Web API](https://learn.microsoft.com/aspnet/core/)  

### Frontend  
- [Angular 17+](https://angular.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [HTML5 & CSS3](https://developer.mozilla.org/)  

---

## 📂 Estrutura do Repositório  

```
.
├── Backend/    # Contém a API em .NET
│   └── MyMachineAPI/
│
└── Frontend/   # Contém a aplicação Angular
    └── MyMachineApp/
```

---

## ▶️ Como Rodar o Projeto  

A aplicação requer dois terminais em execução (Backend e Frontend).  

### 1. Backend (.NET API)  

```bash
cd Backend/MyMachineAPI
dotnet run
```

O backend estará disponível em: **http://localhost:5075**  

### 2. Frontend (Angular App)  

```bash
cd Frontend/MyMachineApp
npm install
ng serve
```

O frontend estará disponível em: **http://localhost:4200**  

---

## ⚙️ Funcionalidades Implementadas  

### 🔹 Backend (API RESTful)  
- **Cadastro de Máquinas** → `POST /api/Machines`  
- **Listagem de Máquinas** → `GET /api/Machines`  
  - Suporte a **filtro por status** via query string (`?status=ativo`)  
- **Detalhes da Máquina** → `GET /api/Machines/{id}`  

### 🔹 Frontend (Interface de Usuário)  
- **Dashboard** → Tabela com todas as máquinas + filtro por status  
- **Página de Cadastro** → Formulário para adicionar nova máquina (com validação)  
- **Página de Detalhes** → Exibe informações completas da máquina selecionada  

---

## 🚧 Problemas & Soluções  

O desafio sugeria a implementação de um **mapa** para exibir a localização das máquinas.  

- Durante o desenvolvimento, foram identificados problemas de **incompatibilidade** entre a versão mais recente do Angular e a biblioteca **Leaflet.js**.  
- Para garantir a **estabilidade e funcionamento correto da aplicação** nos requisitos obrigatórios, a funcionalidade de mapa foi **descontinuada**.  

---

## 👤 Autor  
**Luiz Albuquerque**  
Desenvolvedor Front-End | Full Stack  
📧 [1luiz.albuquerque@gmail.com](mailto:1luiz.albuquerque@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/luizpalbuquerque/) | [GitHub](https://github.com/felipoxy1)  
