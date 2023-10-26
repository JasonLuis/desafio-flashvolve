---
# Backend Node.js com TypeScript

Este é um projeto de backend em Node.js com TypeScript. Ele utiliza o Prisma como ORM para gerenciar o banco de dados.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado na sua máquina.
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): Gerenciador de pacotes para instalar as dependências do projeto.

## Instalação

Siga estas etapas para configurar o projeto:

1. Clone o repositório:

```bash
git clone git@github.com:JasonLuis/desafio-flashvolve.git
cd backend
```

2. Instale as dependências do projeto:

```bash
npm install
# ou, se estiver usando o Yarn
yarn
```

3. Configuração do Banco de Dados (se aplicável):

   Certifique-se de configurar as variáveis de ambiente necessárias para a conexão com o banco de dados no arquivo `.env`.

4. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

## Execução

Após a instalação e configuração, você pode iniciar o servidor:

```bash
npm start
# ou, se estiver usando o Yarn
yarn start
```

O servidor estará disponível em `http://localhost:3000` por padrão. Você pode ajustar a porta no arquivo de configuração, se necessário.

## Documentação da API

A documentação da API está disponível em [http://localhost:3000/docs](http://localhost:3000/docs) quando o servidor estiver em execução.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Abra uma issue ou envie um pull request com melhorias ou correções.

---

# Frontend do Projeto Chat Message

Este é o repositório do frontend do Projeto Chat Message. O frontend é construído com tecnologias web modernas e interage com o backend para fornecer uma experiência de usuário incrível.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado na sua máquina.
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/): Gerenciador de pacotes para instalar as dependências do projeto.

## Instalação

Siga estas etapas para configurar o projeto do frontend:

1. Clone o repositório:

```bash
git clone git@github.com:JasonLuis/desafio-flashvolve.git
cd frontend
```

2. Instale as dependências do projeto:

```bash
npm install
# ou, se estiver usando o Yarn
yarn
```

## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias, se aplicável. Crie um arquivo `.env.local` ou `.env` com as variáveis apropriadas. Você pode encontrar um exemplo no arquivo `.env.example`.

## Execução

Após a instalação e configuração, você pode iniciar o servidor de desenvolvimento:

```bash
npm start
# ou, se estiver usando o Yarn
yarn start
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000` por padrão. Você pode ajustar a porta no arquivo de configuração, se necessário.

## Construção e Implantação

Se você estiver pronto para construir o aplicativo para produção, execute o seguinte comando:

```bash
npm run build
# ou, se estiver usando o Yarn
yarn build
```

Isso criará os arquivos otimizados para produção na pasta `build`.
---