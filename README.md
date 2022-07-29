# Boas vindas ao repositório do Trybe Futebol Clube!

# Entregáveis

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

  No time de desenvolvimento do `TFC`, seu *squad* ficou responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto, você vai construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento deve **respeitar regras de negócio** providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**.

  Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

  O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

</details>

<details>
<summary><strong> 🔰 Iniciando o projeto</strong></summary><br />

  1. Clone o repositório
	* `git clone git@github.com:tryber/sd-017-trybe-futebol-clube.git`.
- Entre na pasta do repositório que você acabou de clonar:
	* `cd sd-017-trybe-futebol-clube`
- Em seguida, entre na pasta app:
	* `cd app`
- Em seguida, entre na pasta backend:
	* `cd backend`

  2. Instale as dependências [**Caso existam**]
	*`npm install`

</details>

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16  
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`:
	- Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
	- Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
		- `nvm install 16 --lts`
		- `nvm use 16`
		- `nvm alias default 16` 

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
	* Use esse [link de referência para realizar a instalação corretamente no ubuntu](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a/conteudo/0006a231-1a10-48a2-ac82-9e03e205a231/instalacao/abe40727-6310-4ad8-bde6-fd1e919dadc0?use_case=side_bar);
	* Acesse o [link da documentação oficial com passos para desinstalar] (https://docs.docker.com/compose/install/#uninstallation) caso necessário.

</details>

<details>
<summary><strong>🐳 Configuração Docker</strong></summary><br />

>  👀 **De olho na dica:**
> Lembre-se, você pode revisitar os conteúdos sobre Docker:
> - [Dockerfile](https://app.betrybe.com/course/back-end/docker/manipulacao-e-criacao-de-imagens-no-docker/e92d2393-3508-43ab-8a67-2b2516d25864) (Seção Dockerfile - Comandos Básicos)
> - [docker-compose](https://app.betrybe.com/course/back-end/docker/orquestrando-containers-com-docker-compose/6e8afaef-566a-47f2-9246-d3700db7a56a) (Seção Compose File - Parte I)
> - [Manipulação e Criação de Imagens no Docker](https://app.betrybe.com/course/back-end/docker/manipulacao-e-criacao-de-imagens-no-docker/e92d2393-3508-43ab-8a67-2b2516d25864)
</details>

<details>
<summary><strong> ⚠️ Inicialização do compose e verificação dos logs das aplicações </strong></summary><br />

 #### ⚠️ **Inicie seu `docker-compose` antes de testar localmente!** ⚠️

  Os testes vão utilizar a sua aplicação do compose para fazer as validações, portanto **é essencial que ela esteja funcionando corretamente** para que os testes passem!

  - Para isso, garanta que as aplicações, tanto do back, quanto do front-end, possuem arquivos `Dockerfile` válidos;
  - Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do seu *compose*.

</details>

<details id='Variaveis-de-ambiente'>
<summary><strong> ⚙️ Variáveis de ambiente </strong></summary><br />

  **No diretório `app/backend/` renomeie o arquivo `.env.example` para `.env` e configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc)**. Isso vai permitir que você inicialize a aplicação fora do _container_ e ela se conecte com seu banco local caso deseje. 
 > `./app/backend/.env.example` 
  ```txt
  JWT_SECRET=jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost 
  DB_PORT=3306
  ```

  **⚠️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto. ⚠️**

  **⚠️ Não defina variável de ambiente para o nome do banco, o mesmo deve se manter com o nome `TRYBE_FUTEBOL_CLUBE`. ⚠️**

</details>

<summary><strong> Requisitos </strong></summary>

Esse projeto é composto de 4 seções principais:
1. User e Login
2. Times
3. Partidas
4. Placar 

## Seção 1: Users e Login

- A rota utilizada deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido;
  - O Campo `password` deve ter mais de 6 caracteres.

- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
  
## 👇 Abaixo estão listados os endpoints da API 👇

### ⚠️ Todos os campos abaixo devem estar preenchidos e de forma adequado, caso contrário será retornado um erro descrevendo o problema.

### 1 - O endpoint `/login` no back-end com o método `POST`, retona um token.

  - O avaliador verificará se é possível fazer o login com dados corretos e que, após o acesso, será redirecionado para a tela de jogos.

- Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
  }
  ```
  
### 2 - O endpoint `/login/validate` no back-end com o método `GET`, retorna a função de um usuário.

  - Essat rota deve receber um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login, vc pode conseguir esse token na rota `/login`;

  - O avaliador verificará se ao tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário.

  A resposta deve ser de status `200` com um `objeto` contendo a `role` do *user*:
  ```json
    { "role": "admin" }
  ```

### 3 - O endpoint `/teams` no back-end com método `GET`, retorna todos os times.

  - Resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
[
	{
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
	...
]
```

### 4 - O endpoint `/teams/:id` no back-end com método `GET`, retornar dados de um time específico 

  - Resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
{
	"id": 5,
	"teamName": "Cruzeiro"
}
```

### 19 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end.

  - A rota deve ser um `GET` e retorna uma lista de partidas;

  - Será validado que a página apresentará todos os dados de partidas sem nenhum filtro.

    Exemplo de retorno:
    ```json
    [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
      ...
      {
        "id": 41,
        "homeTeam": 16,
        "homeTeamGoals": 2,
        "awayTeam": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Internacional"
        }
      }
    ]
    ```

  - **OBS:** Você deverá definir os relacionamentos para ```teamHome``` e ```teamAway``` somente na model de partidas.

### 20 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas em andamento na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que, ao escolher a opção de partidas em andamento, serão filtradas todas as partidas em andamento;

  - Essa requisição deverá usar `query string` para definir o parâmetro:
    ex: `matches?inProgress=true`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeam": 6,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "Ferroviária"
      },
      "teamAway": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  ```

### 21 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar as partidas finalizadas na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que,ao escolher a opção de partidas finalizadas, serão filtradas todas as partidas finalizadas;

  - Essa requisição deverá usar `query string` para definir o parâmetro.
    ex: `matches?inProgress=false`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "Internacional"
      },
      "teamAway": {
        "teamName": "Santos"
      }
    }
  ]
  ```

### 23 - Desenvolva a rota `/matches` de modo que seja possível salvar uma partida com o status de inProgress como true no banco de dados

  - A rota deverá ser do tipo `POST` e retornar a partida inserida no banco de dados;

  - Será validado que é possível salvar um jogo no banco de dados e ver o jogo na página de jogos;

  - A partida só pode ser criada com token JWT validado;

  - O corpo da requisição terá o seguinte formato:
  ```json
  {
    "homeTeam": 16, // O valor deve ser o id do time
    "awayTeam": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2
  }
  ```

  - Caso a partida seja inserida com sucesso, deve-se retornar os dados da partida, com _status_ `201`:

  ```json
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }
  ```

### 24 - Desenvolva a rota `/matches/:id/finish` de modo que seja possível alterar o status inProgress de uma partida para false no banco de dados

  - A rota deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será validado que, ao finalizar uma partida, a alteração é feita no banco de dados e na página.
	
  - Deve-se retornar, com um status `200`, a seguinte mensagem:

  ```json
  { "message": "Finished" }
  ```

### 25 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais

  - Será validado que não é possível inserir uma partida com times iguais;

  - Não deve ser possível criar uma partida com o mesmo time, por exemplo: Barcelona x Barcelona. Caso isso ocorra, deve-se retornar, com um status `401`, a seguinte mensagem::

  ```json
  { "message": "It is not possible to create a match with two equal teams" }
  ```

### 26 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com um time que não existe na tabela teams

  - Será validado que não é possível inserir uma partida com um time que não existe na tabela teams;

  - Caso algum dos times não esteja cadastrado no banco de dados, deve-se retornar, com um status `404,` a seguinte mensagem:

  ```json
  { "message": "There is no team with such id!" }
  ```

### 27 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida sem um token válido

  - Será validado que não é possível inserir uma partida com um token inválido;

  - Caso o token informado não seja válido, deve-se retornar, com um status `401`, a seguinte mensagem:

  ```json
  { "message": "Token must be a valid token" }
  ```

### 28 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

  - O endpoint deve ser do tipo `PATCH`;

  - Será recebido o `id` pelo parâmetro da URL;

  - Será avaliado que é possível alterar o resultado de uma partida.

  - O corpo da requisição terá o seguinte formato:
  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```
  - Será avaliado que é o endpoint responde à requisição com um status `200` e qualquer corpo.

## Seção 4: Leaderboards (placares)

  ▶️ Para construir a classificação dos times, devem ser seguidas as seguintes regras de negócios:

    - `Classificação`: Posição na classificação;
    - `Time`: Nome do time;
    - `P`: Total de Pontos;
    - `J`: Total de Jogos;
    - `V`: Total de Vitórias;
    - `E`: Total de Empates;
    - `D`: Total de Derrotas;
    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos;
    - `SG`: Saldo total de gols;
    - `%`: Aproveitamento do time.

    <br/>

  - Todas as regras de negócio e cálculos necessários deverão ser realizados no seu back-end. A aplicação front-end apenas renderizará essas informações.

  - Para calcular o `Total de Pontos`, você deve levar em consideração que:

    - O time `vitorioso`: marcará +3 pontos;
    - O time `perdedor`: marcará 0 pontos;
    - Em caso de `empate`: ambos os times marcam +1 ponto.

  - Para o campo `Aproveitamento do time (%)`, que é a porcentagem de jogos ganhos, use a seguinte fórmula: `P/(J*3)*100`, onde:

    - `P`: Total de Pontos;
    - `J`: Total de Jogos.

    Obs.: O seu resultado deverá ser limitado a `duas casas decimais`.

  - Para calcular `Saldo de Gols` use a seguinte fórmula: `GP - GC`, onde:

    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos.

  - O resultado deverá ser ordenado sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou. Em caso de empate no `Total de Pontos`, você deve levar em consideração os seguintes critérios para desempate:

  **Ordem para desempate**

  1º Total de Vitórias;
  2º Saldo de gols;
  3º Gols a favor;
  4º Gols sofridos.


  ⚠️ **Atenção:** ⚠️

  - Por padrão, as respostas de todos os seus endpoints deverão estar em inglês, mesmo que a renderização no front-end seja em português.
  - A sua tabela deverá renderizar **somente** as PARTIDAS que já foram FINALIZADAS!
**Os seguintes pontos serão avaliados:**

  ```
  - Se a lista de classificação está correta;
  - Se a regra de classificação se mantém mesmo com mudanças na classificação;
  - Se a tabela de classificação tem 10 colunas;
  - Se a tabela tem uma linha para cada time.
  ```

**Exemplo de retorno esperado:**

  ```json
  [
    {
      "name": "Palmeiras",
      "totalPoints": 13,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 1,
      "totalLosses": 0,
      "goalsFavor": 17,
      "goalsOwn": 5,
      "goalsBalance": 12,
      "efficiency": 86.67
    },
    {
      "name": "Corinthians",
      "totalPoints": 12,
      "totalGames": 5,
      "totalVictories": 4,
      "totalDraws": 0,
      "totalLosses": 1,
      "goalsFavor": 12,
      "goalsOwn": 3,
      "goalsBalance": 9,
      "efficiency": 80
    },
    {
      "name": "Santos",
      "totalPoints": 11,
      "totalGames": 5,
      "totalVictories": 3,
      "totalDraws": 2,
      "totalLosses": 0,
      "goalsFavor": 12,
      "goalsOwn": 6,
      "goalsBalance": 6,
      "efficiency": 73.33
    },
    ...
  ]
  ```

## Leaderboard Home

### 29 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/home` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados.

 <details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Santos',
      totalPoints: '9',
      totalGames: '3',
      totalVictories: '3',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '9',
      goalsOwn: '3',
      goalsBalance: '6',
      efficiency: '100'
    },
    {
      name: 'Palmeiras',
      totalPoints: '7',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '10',
      goalsOwn: '5',
      goalsBalance: '5',
      efficiency: '77.78'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '6',
      goalsOwn: '1',
      goalsBalance: '5',
      efficiency: '100'
    },
    {
      name: 'Grêmio',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '100'
    },
    {
      name: 'Real Brasília',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '0',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '0',
      goalsFavor: '4',
      goalsOwn: '1',
      goalsBalance: '3',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '6',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Botafogo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '4',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '2',
      goalsBalance: '1',
      efficiency: '50'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '2',
      goalsOwn: '3',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Flamengo',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '2',
      goalsBalance: '-1',
      efficiency: '16.67'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '6',
      goalsBalance: '-3',
      efficiency: '11.11'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '1',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '2',
      goalsFavor: '3',
      goalsOwn: '7',
      goalsBalance: '-4',
      efficiency: '11.11'
    },
    {
      name: 'São José-SP',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '2',
      goalsOwn: '5',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Bahia',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '0',
      goalsOwn: '4',
      goalsBalance: '-4',
      efficiency: '0'
    }
]
```
</details>

### 30 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível: filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards), ordenando corretamente como na explicação;

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/home`, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Santos',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '9',
    goalsOwn: '3',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '9',
    totalGames: '3',
    totalVictories: '3',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '8',
    goalsOwn: '2',
    goalsBalance: '6',
    efficiency: '100'
  },
  {
    name: 'Palmeiras',
    totalPoints: '7',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '10',
    goalsOwn: '5',
    goalsBalance: '5',
    efficiency: '77.78'
  },
  {
    name: 'Grêmio',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'Real Brasília',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '0',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '4',
    goalsOwn: '1',
    goalsBalance: '3',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '6',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '4',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '2',
    goalsBalance: '1',
    efficiency: '50'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '2',
    goalsOwn: '3',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Flamengo',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '2',
    goalsBalance: '-1',
    efficiency: '16.67'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '6',
    goalsBalance: '-3',
    efficiency: '11.11'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '1',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '3',
    goalsOwn: '7',
    goalsBalance: '-4',
    efficiency: '11.11'
  },
  {
    name: 'São José-SP',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Bahia',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    goalsFavor: '0',
    goalsOwn: '4',
    goalsBalance: '-4',
    efficiency: '0'
  }
]
```
</details>

## Leaderboard away

### 31 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times na tela de classificação do front-end, com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '7',
    goalsOwn: '0',
    goalsBalance: '7',
    efficiency: '100'
  },
  {
    name: 'Corinthians',
    totalPoints: '6',
    totalGames: '3',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '6',
    goalsOwn: '2',
    goalsBalance: '4',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '0',
    goalsBalance: '3',
    efficiency: '100'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '2',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '1',
    goalsBalance: '2',
    efficiency: '100'
  },
  {
    name: 'São Paulo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '4',
    goalsOwn: '5',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Real Brasília',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '3',
    goalsOwn: '4',
    goalsBalance: '-1',
    efficiency: '44.44'
  },
  {
    name: 'Grêmio',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '7',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Flamengo',
    totalPoints: '4',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '44.44'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '3',
    totalGames: '2',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '1',
    goalsBalance: '0',
    efficiency: '50'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '3',
    totalGames: '3',
    totalVictories: '1',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '6',
    goalsOwn: '7',
    goalsBalance: '-1',
    efficiency: '33.33'
  },
  {
    name: 'Santos',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '3',
    goalsOwn: '3',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '2',
    goalsOwn: '2',
    goalsBalance: '0',
    efficiency: '33.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '1',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '1',
    goalsOwn: '3',
    goalsBalance: '-2',
    efficiency: '16.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '0',
    totalGames: '2',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '2',
    goalsFavor: '1',
    goalsOwn: '4',
    goalsBalance: '-3',
    efficiency: '0'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '0',
    totalGames: '3',
    totalVictories: '0',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '1',
    goalsOwn: '10',
    goalsBalance: '-9',
    efficiency: '0'
  }
  ]
```
</details>

### 32 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível: filtrar as classificações dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos.
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
    {
      name: 'Palmeiras',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '7',
      goalsOwn: '0',
      goalsBalance: '7',
      efficiency: '100'
    },
    {
      name: 'Corinthians',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '6',
      goalsOwn: '2',
      goalsBalance: '4',
      efficiency: '66.67'
    },
    {
      name: 'Internacional',
      totalPoints: '6',
      totalGames: '3',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '2',
      goalsBalance: '2',
      efficiency: '66.67'
    },
    {
      name: 'São José-SP',
      totalPoints: '6',
      totalGames: '2',
      totalVictories: '2',
      totalDraws: '0',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '1',
      goalsBalance: '2',
      efficiency: '100'
    },
    {
      name: 'São Paulo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '5',
      goalsBalance: '0',
      efficiency: '44.44'
    },
    {
      name: 'Ferroviária',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '4',
      goalsOwn: '5',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Real Brasília',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '3',
      goalsOwn: '4',
      goalsBalance: '-1',
      efficiency: '44.44'
    },
    {
      name: 'Grêmio',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '5',
      goalsOwn: '7',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Flamengo',
      totalPoints: '4',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '44.44'
    },
    {
      name: 'Avaí/Kindermann',
      totalPoints: '3',
      totalGames: '2',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '1',
      goalsBalance: '0',
      efficiency: '50'
    },
    {
      name: 'Cruzeiro',
      totalPoints: '3',
      totalGames: '3',
      totalVictories: '1',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '6',
      goalsOwn: '7',
      goalsBalance: '-1',
      efficiency: '33.33'
    },
    {
      name: 'Santos',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '3',
      goalsOwn: '3',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Bahia',
      totalPoints: '2',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '2',
      totalLosses: '0',
      goalsFavor: '2',
      goalsOwn: '2',
      goalsBalance: '0',
      efficiency: '33.33'
    },
    {
      name: 'Minas Brasília',
      totalPoints: '1',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '1',
      totalLosses: '1',
      goalsFavor: '1',
      goalsOwn: '3',
      goalsBalance: '-2',
      efficiency: '16.67'
    },
    {
      name: 'Botafogo',
      totalPoints: '0',
      totalGames: '2',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '2',
      goalsFavor: '1',
      goalsOwn: '4',
      goalsBalance: '-3',
      efficiency: '0'
    },
    {
      name: 'Napoli-SC',
      totalPoints: '0',
      totalGames: '3',
      totalVictories: '0',
      totalDraws: '0',
      totalLosses: '3',
      goalsFavor: '1',
      goalsOwn: '10',
      goalsBalance: '-9',
      efficiency: '0'
    }
  ]
```
</details>

## Leaderboard

  - Esse endpoint vai alimentar uma tabela idêntica ao exemplo abaixo no front-end:

    | Classificação | Time        | P   | J   | V   | E   | D   | GP  | GC  | SG  | %    |
    | ------------- | ----------- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
    | 1             | Corinthians | 38  | 15  | 12  | 2   | 1   | 44  | 13  | 31  | 84.4 |


### 33 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET` e ter o retorno como descrito no exemplo do [leaderboard](#leaderboards);

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.
<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
 [
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
];
```
</details>

### 34 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Flamengo 3 X 0 Napoli-SC e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67'
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80'
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33'
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67'
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33'
  },
  {
    name: 'Flamengo',
    totalPoints: '8',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '5',
    goalsOwn: '5',
    goalsBalance: '0',
    efficiency: '44.44'
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '2',
    goalsFavor: '7',
    goalsOwn: '7',
    goalsBalance: '0',
    efficiency: '46.67'
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40'
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67'
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67'
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33'
  },
  {
    name: 'Minas Brasília',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '9',
    goalsBalance: '-5',
    efficiency: '13.33'
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '6',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '4',
    goalsFavor: '3',
    goalsOwn: '15',
    goalsBalance: '-12',
    efficiency: '11.11'
  }
]
```
</details>

### 35 - Desenvolva o endpoint /leaderboard de forma que seja possível: filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Minas Brasília 1 X 0 Ferroviária

  - O retorno deve continuar como no [leaderboard](#leaderboards);

  - Será avaliado que após acrescentar a partida Minas Brasília 1 X 0 Ferroviária e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.

<details>  
<summary><strong> Retorno esperado: </strong></summary> <br/>

```js
[
  {
    name: 'Palmeiras',
    totalPoints: '13',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '1',
    totalLosses: '0',
    goalsFavor: '17',
    goalsOwn: '5',
    goalsBalance: '12',
    efficiency: '86.67',
  },
  {
    name: 'Corinthians',
    totalPoints: '12',
    totalGames: '5',
    totalVictories: '4',
    totalDraws: '0',
    totalLosses: '1',
    goalsFavor: '12',
    goalsOwn: '3',
    goalsBalance: '9',
    efficiency: '80',
  },
  {
    name: 'Santos',
    totalPoints: '11',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '2',
    totalLosses: '0',
    goalsFavor: '12',
    goalsOwn: '6',
    goalsBalance: '6',
    efficiency: '73.33',
  },
  {
    name: 'Grêmio',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '8',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Internacional',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '7',
    goalsOwn: '6',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'Real Brasília',
    totalPoints: '10',
    totalGames: '5',
    totalVictories: '3',
    totalDraws: '1',
    totalLosses: '1',
    goalsFavor: '5',
    goalsOwn: '4',
    goalsBalance: '1',
    efficiency: '66.67',
  },
  {
    name: 'São Paulo',
    totalPoints: '8',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '2',
    totalLosses: '1',
    goalsFavor: '9',
    goalsOwn: '6',
    goalsBalance: '3',
    efficiency: '53.33',
  },
  {
    name: 'Ferroviária',
    totalPoints: '7',
    totalGames: '6',
    totalVictories: '2',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '7',
    goalsOwn: '8',
    goalsBalance: '-1',
    efficiency: '38.89',
  },
  {
    name: 'São José-SP',
    totalPoints: '6',
    totalGames: '5',
    totalVictories: '2',
    totalDraws: '0',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '6',
    goalsBalance: '-1',
    efficiency: '40',
  },
  {
    name: 'Flamengo',
    totalPoints: '5',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '2',
    goalsFavor: '2',
    goalsOwn: '5',
    goalsBalance: '-3',
    efficiency: '33.33',
  },
  {
    name: 'Minas Brasília',
    totalPoints: '5',
    totalGames: '6',
    totalVictories: '1',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '5',
    goalsOwn: '9',
    goalsBalance: '-4',
    efficiency: '27.78',
  },
  {
    name: 'Cruzeiro',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '8',
    goalsOwn: '10',
    goalsBalance: '-2',
    efficiency: '26.67',
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '4',
    goalsOwn: '8',
    goalsBalance: '-4',
    efficiency: '26.67',
  },
  {
    name: 'Botafogo',
    totalPoints: '4',
    totalGames: '5',
    totalVictories: '1',
    totalDraws: '1',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '8',
    goalsBalance: '-5',
    efficiency: '26.67',
  },
  {
    name: 'Bahia',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '2',
    goalsOwn: '6',
    goalsBalance: '-4',
    efficiency: '13.33',
  },
  {
    name: 'Napoli-SC',
    totalPoints: '2',
    totalGames: '5',
    totalVictories: '0',
    totalDraws: '2',
    totalLosses: '3',
    goalsFavor: '3',
    goalsOwn: '12',
    goalsBalance: '-9',
    efficiency: '13.33',
  },
]
```
</details>

</details>
</details>
