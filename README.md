🌸 Clínica Meraki - Landing Page
<img src="/imagens/ReadMe.png" alt="Home da Clínica Meraki" width="880"/>
📌 Sobre o Projeto

O projeto Clínica Meraki foi desenvolvido como Projeto de Extensão 2026 com o objetivo de criar a presença digital de uma clínica de estética que ainda não possuía plataforma online.

A aplicação funciona como uma landing page interativa, permitindo que clientes conheçam os serviços oferecidos, encontrem informações de contato e realizem agendamentos de forma prática e intuitiva.

🎯 Objetivo

O projeto busca resolver a dificuldade de divulgação e comunicação da clínica com seus clientes, oferecendo:

- Divulgação dos serviços estéticos;
- Melhor comunicação com clientes;
- Facilidade de navegação;
- Responsividade para dispositivos móveis;
- Maior acessibilidade digital.
  
🛠️ Tecnologias Utilizadas
- HTML5 → Estrutura das páginas;
- CSS3 → Estilização;
- Bootstrap → Responsividade e layout;
- JavaScript → Interações e funcionalidades;
- Node.js → Servidor da aplicação;
- Express → Gerenciamento de rotas;
- EJS → Renderização de páginas dinâmicas;
- MySQL → Banco de dados;
- VS Code → Ambiente de desenvolvimento.
  
📋 Pré-requisitos

 Antes de executar o projeto, é necessário ter instalado:

- Node.js
- Git
- MySQL Server
- VS Code (opcional)
- Extensão Live Server (opcional)
  
⚙️ Instalação e Configuração

1️⃣ Clone o repositório
  git clone https://github.com/BeatrizModesto/EstheticConnect.git
  
2️⃣ Acesse a pasta do projeto
  cd EstheticConnect
  
3️⃣ Instale as dependências
  npm install

Ou instale manualmente:

  npm install express mysql2 ejs

4️⃣ Configure o banco de dados

  Abra o MySQL;
- Execute os scripts SQL de criação das tabelas;
- Execute os scripts de inserção de dados;
- No arquivo dbConnection, altere:
- usuário;
- senha;
- nome do banco de dados.
  
🚀 Como Executar o Projeto

Execute o servidor:

  node index.js

  Depois abra no navegador:

  http://localhost:3000
  
📱 Exemplos de Uso

  O sistema permite:

- Visualizar procedimentos estéticos;
- Navegar entre páginas da clínica;
- Consultar informações de contato;
- Realizar agendamentos;
- Utilizar recursos de acessibilidade.
  
♿ Acessibilidade

O projeto considera boas práticas de acessibilidade, incluindo:

- Suporte a LIBRAS com VLibras;
- Contraste adequado entre texto e fundo;
- Navegação intuitiva;
- Responsividade;
- Textos alternativos em imagens (alt="");
- Melhor experiência para leitores de tela.
  
📂 Estrutura de Pastas
EstheticConnect/
│
├── app/
│   ├── controllers/
│   ├── views/
│   ├── routes/
│   └── models/
│
├── public/
│   ├── css/
│   ├──  imagens/
│   
│
├── config/
│   |── dbconnection.js
│   ├──  server.js
├── index.js
├── package.json
└── README.md
🧪 Testes

O projeto não possui testes automatizados no momento.

Os testes podem ser realizados manualmente verificando:

- Responsividade;
- Navegação;
- Funcionamento dos botões;
- Conexão com banco de dados;
- Carregamento das imagens;
- Formulários e agendamentos.
  
🤝 Contribuição

Contribuições são bem-vindas!

Para contribuir:

- Faça um fork do projeto;
- Crie uma branch:
- git checkout -b minha-feature
- Faça suas alterações;
  
Envie um commit:
- git commit -m "Minha contribuição"
  
Faça um push:
- git push origin minha-feature
- Abra um Pull Request.
  
📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

✒️ Autoras
Beatriz Modesto
Beatriz Lemos

💗 Obrigada por visitar o projeto!
Sinta-se à vontade para contribuir ou deixar sugestões.

