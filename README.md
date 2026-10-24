# 🎬 Lista de Filmes

> Aplicativo mobile para organização de filmes, desenvolvido com **React Native e Expo**, com navegação entre telas e gerenciamento de uma lista pessoal de filmes.

---

## 📖 Sobre o projeto

O **Lista de Filmes** é uma aplicação mobile desenvolvida como parte de uma atividade acadêmica da disciplina de laboratório de programação.

O sistema tem como objetivo permitir que o usuário organize os filmes de sua lista, visualize suas informações e acompanhe quais já foram assistidos.

A aplicação foi desenvolvida utilizando **React Native com Expo**, permitindo a criação de interfaces para dispositivos móveis com JavaScript. A navegação entre as telas é realizada por meio da biblioteca React Navigation.

A estrutura do projeto utiliza componentes funcionais e Hooks do React para organizar a interface e gerenciar os dados da aplicação.

### 🎯 Objetivos técnicos

Durante o desenvolvimento, foram trabalhados conceitos como:

- Desenvolvimento de aplicações mobile com React Native;
- Utilização do Expo para execução e desenvolvimento;
- Criação e reutilização de componentes funcionais;
- Gerenciamento de estado com Hooks do React;
- Navegação entre telas;
- Passagem de informações entre componentes e telas;
- Manipulação de listas;
- Organização dos arquivos e módulos da aplicação;
- Personalização de interfaces e utilização de imagens e fontes.

---

## 🎨 Layout / Demonstração

As capturas de tela abaixo podem ser adicionadas após a execução do aplicativo.

### Tela de filmes

<div align="center">
    <img src="./docs/telaFilmes.png" width="80%" alt="Tela de listagem de filmes">
</div>

### Adicionar filme

<div align="center">
    <img src="./docs/telaAdicionar.png" width="80%" alt="Tela de cadastro de filme">
</div>

### Detalhes do filme

<div align="center">
    <img src="./docs/telaDetalhes.png" width="80%" alt="Tela de detalhes de um filme">
</div>

---

## ✨ Funcionalidades

- [x] Exibição da lista de filmes;
- [x] Cadastro de novos filmes;
- [x] Visualização dos detalhes de um filme;
- [x] Marcação de filmes como assistidos;
- [x] Exclusão de filmes da lista;
- [x] Navegação entre as telas do aplicativo;
- [x] Atualização da interface conforme as alterações na lista.

> As funcionalidades descritas correspondem à estrutura conhecida do projeto. Recursos adicionais devem ser documentados conforme forem implementados.

---

## 🛠️ Tecnologias utilizadas

### Linguagem

- **JavaScript**

### Framework e bibliotecas

- **React Native** — criação das interfaces mobile;
- **Expo** — ambiente de desenvolvimento e execução;
- **React Navigation** — navegação entre telas;
- **@react-navigation/native** — estrutura principal da navegação;
- **@react-navigation/bottom-tabs** — navegação por abas;
- **@react-navigation/stack** — navegação em pilha;
- **expo-font** — carregamento de fontes personalizadas;
- **@expo-google-fonts/newsreader** — fonte Newsreader;
- **@expo-google-fonts/ribeye** — fonte Ribeye.

### Ferramentas

- **Visual Studio Code**;
- **Node.js e npm**;
- **Git e GitHub**;
- **Expo Go** ou emulador Android para executar o aplicativo.

---

## 🏗️ Organização da aplicação

A aplicação utiliza componentes funcionais do React Native, com responsabilidades distribuídas entre as telas e os módulos de navegação.

O arquivo `App.js` centraliza o estado da lista de filmes e as funções responsáveis pelas operações realizadas sobre ela.

Os componentes de tela são responsáveis por apresentar as informações e permitir a interação do usuário. Os módulos de navegação organizam o acesso às diferentes partes do aplicativo.

### Componentes e telas

#### `App.js`

É o componente principal da aplicação.

Responsabilidades:

- manter o estado da lista de filmes;
- disponibilizar as operações de cadastro, exclusão e marcação de filmes como assistidos;
- integrar a estrutura principal do aplicativo.

#### `TelaFilmes.js`

Responsável pela apresentação da lista de filmes.

Permite visualizar os filmes cadastrados e acessar as funcionalidades disponíveis para cada item.

#### `TelaAdicionar.js`

Responsável pela interface de cadastro de novos filmes.

Recebe as informações preenchidas pelo usuário e integra o processo de adição à lista.

#### `TelaDetalhes.js`

Responsável pela apresentação das informações de um filme selecionado.

Permite consultar os detalhes do item e acessar as ações disponíveis nessa tela.

### Navegação

#### `NavegacaoPrincipal.js`

Organiza a estrutura principal de navegação do aplicativo.

#### `NavegacaoFilmes.js`

Organiza a navegação relacionada às telas de filmes, permitindo o acesso às diferentes funcionalidades da aplicação.

---

## 📂 Estrutura do projeto

A estrutura abaixo representa a organização dos principais arquivos da aplicação.

```text
ListaFilmes/
│
├── assets/
│   └── images/
│       └── fundo.jpg
│
├── navegacao/
│   ├── NavegacaoPrincipal.js
│   └── NavegacaoFilmes.js
│
├── App.js
├── index.js
├── TelaFilmes.js
├── TelaAdicionar.js
├── TelaDetalhes.js
│
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura pode conter outros arquivos de imagens, fontes, componentes ou configurações. Os arquivos apresentados devem corresponder aos existentes na versão final do repositório.

---

## 🔄 Fluxo de utilização

O funcionamento geral do aplicativo pode ser representado pelo seguinte fluxo:

```text
          Usuário
             │
             ▼
       Lista de filmes
             │
       ┌─────┴─────┐
       ▼           ▼
  Adicionar     Selecionar
    filme         filme
       │           │
       ▼           ▼
  Atualizar     Detalhes
    lista       do filme
                   │
              ┌────┴────┐
              ▼         ▼
           Marcar     Excluir
          assistido    filme
              │         │
              └────┬────┘
                   ▼
           Atualizar lista
```

O fluxo utiliza o estado gerenciado pelo React para atualizar a interface conforme as operações realizadas pelo usuário.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Para executar a aplicação, é necessário ter instalado:

- **Node.js**;
- **npm**, instalado junto ao Node.js;
- **Expo Go** em um dispositivo móvel ou um emulador Android configurado.

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Entre na pasta do projeto

```bash
cd ListaFilmes
```

Execute os próximos comandos no diretório que contém o arquivo `package.json`.

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o Expo

```bash
npx expo start
```

### 5. Execute o aplicativo

Após iniciar o servidor de desenvolvimento:

- **Dispositivo físico:** escaneie o QR Code com o Expo Go, conforme as instruções exibidas pelo Expo;
- **Emulador Android:** pressione `a` no terminal em que o Expo está sendo executado, com o emulador configurado.

---

## 📝 Como utilizar

### Visualizar filmes

Acesse a tela de filmes para consultar os itens presentes na lista.

### Adicionar um filme

1. Acesse a tela de cadastro.
2. Preencha as informações solicitadas.
3. Confirme a operação.
4. Verifique o filme na lista.

### Consultar detalhes

Selecione um filme para acessar sua tela de detalhes.

### Marcar como assistido

Utilize a ação correspondente para indicar que o filme já foi assistido.

### Excluir um filme

Utilize a ação de exclusão disponível no aplicativo para remover o filme da lista.

---

## 🧩 Conceitos aplicados

O desenvolvimento da aplicação permite colocar em prática conceitos fundamentais do desenvolvimento mobile com React Native:

- Componentes funcionais;
- Hooks do React;
- Estado e atualização da interface;
- Componentização;
- Navegação entre telas;
- Passagem de propriedades entre componentes;
- Renderização de listas;
- Manipulação de eventos;
- Organização modular do código;
- Personalização de interfaces.

---

## 🎓 Contexto acadêmico

Projeto desenvolvido no contexto de uma atividade acadêmica de programação, com o objetivo de aplicar os conceitos de desenvolvimento de aplicações mobile utilizando React Native.

A implementação explora a criação de interfaces, o gerenciamento de estado e a navegação entre telas, organizando as funcionalidades de uma aplicação voltada à gestão de uma lista pessoal de filmes.

---

## 📚 Referências

- Documentação oficial do [React Native](https://reactnative.dev/);
- Documentação oficial do [Expo](https://docs.expo.dev/);
- Documentação do [React Navigation](https://reactnavigation.org/);
- Materiais didáticos disponibilizados para a atividade, incluindo os conteúdos sobre componentes funcionais, Hooks e navegação em React Native.

---

## 👩‍💻 Autora

**Letícia Videira Gois**

Estudante de Ciência da Computação — Universidade Estadual de Londrina (UEL)
