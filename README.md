# Fast Curriculum API

O Fast Curriculum é uma plataforma inovadora que auxilia candidatos a emprego na criação de currículos personalizados adaptados a descrições de vagas específicas. Ao inserir a descrição da vaga, o sistema gera um currículo personalizado usando as informações do usuário, otimizando suas chances no competitivo mercado de trabalho. Este repositório contém a API backend construída com Node.js, NestJS e GraphQL.

## Índice

•⁠ ⁠[Fast Curriculum API](#fast-curriculum-api)

- [Fast Curriculum API](#fast-curriculum-api)
  - [Índice](#índice)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Começando](#começando)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação](#instalação)

## Funcionalidades

•⁠ ⁠*Autenticação e Autorização de Usuário*: Registro e login seguros com JWT.
•⁠ ⁠*Gerenciamento de Perfil*: Usuários podem gerenciar suas informações pessoais, experiência profissional, educação e habilidades.
•⁠ ⁠*Geração de Currículos*: Integração com a OpenAI para gerar currículos personalizados com base nas descrições de vagas.
•⁠ ⁠*Sistema de Créditos*: Usuários podem comprar créditos via Mercado Pago para gerar currículos.
•⁠ ⁠*Análise de Currículos*: Analise currículos existentes e forneça sugestões de melhoria.
•⁠ ⁠*Notificações*: Notificações em tempo real e alertas por e-mail para ações importantes.
•⁠ ⁠*API Gateway*: Gateway de API centralizado para roteamento e segurança.

## Tecnologias Utilizadas

•⁠ ⁠*Node.js*: Ambiente de execução JavaScript.
•⁠ ⁠*NestJS*: Framework progressivo para construir aplicações server-side eficientes e escaláveis com Node.js.
•⁠ ⁠*GraphQL*: Linguagem de consulta para APIs, fornecendo uma alternativa mais eficiente e flexível ao REST.
•⁠ ⁠*Prisma*: ORM de última geração para Node.js e TypeScript.
•⁠ ⁠*TypeScript*: Superconjunto tipado do JavaScript que compila para JavaScript puro.
•⁠ ⁠*JWT (jsonwebtoken)*: Para autenticação e autorização.
•⁠ ⁠*Bcrypt*: Biblioteca para auxiliar na hash de senhas.
•⁠ ⁠*Class Validator e Class Transformer*: Para validação e transformação de dados de requisição.
•⁠ ⁠*Dotenv*: Carrega variáveis de ambiente de um arquivo ⁠ .env ⁠.
•⁠ ⁠*Nodemon*: Utilitário que monitora alterações no código-fonte e reinicia automaticamente o servidor.
•⁠ ⁠*Jest*: Framework de testes para JavaScript.
•⁠ ⁠*Docker*: Plataforma de conteinerização para ambientes de desenvolvimento e implantação consistentes.
•⁠ ⁠*SDK do Mercado Pago*: Integração para processamento de pagamentos.
•⁠ ⁠*API da OpenAI*: Integração para geração e análise de currículos.

## Começando

### Pré-requisitos

•⁠ ⁠*Node.js* (versão 14 ou superior)
•⁠ ⁠*npm* (versão 6 ou superior)
•⁠ ⁠*Docker* e _Docker Compose_ (para conteinerização)
•⁠ ⁠Banco de dados _PostgreSQL_
•⁠ ⁠*Chave de API da OpenAI*
•⁠ ⁠*Credenciais do Mercado Pago*

### Instalação

1.⁠ ⁠*Clone o repositório:*

```bash
git clone https://github.com/seuusuario/fast-curriculum.git
cd fast-curriculum
```

Instale as dependências:

```bash
npm install
```

Configure as Variáveis de Ambiente:

Crie um arquivo .env no diretório raiz e adicione as seguintes variáveis:

env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/fastcurriculum
JWT_SECRET=seu_jwt_secret
OPENAI_API_KEY=sua_chave_api_openai
MERCADOPAGO_ACCESS_TOKEN=seu_token_acesso_mercadopago
Substitua os espaços reservados pelos seus valores de configuração reais.

Execute as Migrações do Banco de Dados:

```bash
npx prisma migrate dev --name init
```

Executando a Aplicação
Modo de Desenvolvimento:

```bash
npm run start:dev
```

Modo de Produção:

```bash
npm run build
npm run start:prod
```

Usando Docker:

Certifique-se de que o Docker e o Docker Compose estão instalados.

```bash
docker-compose up -d
```

Isso configurará a aplicação juntamente com o banco de dados PostgreSQL.

Documentação da API
A API do Fast Curriculum utiliza GraphQL. Uma vez que a aplicação esteja em execução, você pode acessar o GraphQL Playground em:

```bash
http://localhost:3000/graphql
```

Aqui você pode explorar as queries, mutations e subscriptions disponíveis.

Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

```

```
