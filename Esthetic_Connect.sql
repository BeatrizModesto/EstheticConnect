DROP DATABASE IF EXISTS esthetic_connect;
CREATE DATABASE esthetic_connect;
USE  esthetic_connect;

/*HOME PAGE */ 
CREATE TABLE carousel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagem VARCHAR(255),
    titulo VARCHAR(100),
    descricao TEXT
);

INSERT INTO carousel (imagem, titulo, descricao) VALUES
('/imagens/carousel1.jpg', 'Beleza e Cuidado', 'Tratamentos personalizados para realçar sua beleza natural'),
('/imagens/carousel2.jpg', 'Cuidados com a Pele', 'Procedimentos seguros e realizados por profissionais qualificados'),
('/imagens/carousel3.jpg', 'Resultados Visíveis', 'Veja a diferença com nossos tratamentos exclusivos');

CREATE TABLE descricao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT
);

/*Procedimentos corporais*/

CREATE TABLE procedimentos_corporais(
 id INT AUTO_INCREMENT PRIMARY KEY,
 icone_corporal VARCHAR(255),
 titulo_corporal VARCHAR(100),
 descricao_corporal TEXT
);

INSERT INTO procedimentos_corporais (icone_corporal, titulo_corporal, descricao_corporal) VALUES
('bi bi-heart', 'Criolipólise', 'A criolipólise é um tratamento não invasivo que utiliza o resfriamento controlado para reduzir a gordura localizada. As células de gordura são submetidas a baixas temperaturas e, após o congelamento, passam por um processo natural de eliminação pelo organismo, promovendo redução de medidas de forma gradual e segura.'),
('bi bi-heart', 'Criofrequência', 'A criofrequência combina radiofrequência com um resfriamento intenso da superfície da pele. Esse contraste térmico estimula a produção de colágeno, melhora a firmeza da pele, reduz flacidez e auxilia no tratamento da celulite. O procedimento também ajuda na redução de medidas graças ao aquecimento profundo controlado.'),
('bi bi-heart', 'Criomodelagem (na harmonização corporal)', 'A criomodelagem utiliza baixas temperaturas associadas a movimentos específicos para modelar e definir áreas do corpo. O frio intenso ajuda a reduzir medidas, melhorar contornos corporais e dar mais definição à silhueta. É um procedimento rápido, confortável e muito procurado para harmonização corporal.'),
('bi bi-heart', 'Dermovac', 'O Dermovac é um tratamento que utiliza vacuoterapia para estimular a circulação sanguínea e linfática. Ele ajuda a melhorar a textura da pele, reduzir celulite, tratar fibroses, aliviar retenção de líquidos e potencializar resultados de outros procedimentos corporais. Também auxilia na quebra de nódulos de gordura.'),
('bi bi-heart', 'Lipocavitação', 'A lipocavitação utiliza ondas de ultrassom para romper células de gordura, transformando-as em substâncias líquidas que são eliminadas pelo organismo. É indicada para gordura localizada, melhora do contorno corporal e redução rápida de medidas.'),
('bi bi-heart', 'Depilação a Led', 'A depilação a LED é uma tecnologia avançada que atua diretamente no folículo piloso, enfraquecendo-o e reduzindo o crescimento dos pelos. É menos dolorosa que outros métodos e indicada para todos os fototipos de pele, oferecendo resultados duradouros e maior conforto durante o procedimento.'),
('bi bi-heart', 'Enzimas', 'As enzimas corporais são aplicadas para auxiliar na quebra de gordura, redução de medidas e melhora da celulite. São fórmulas injetáveis que agem diretamente na região desejada, acelerando o metabolismo local e potencializando resultados de forma precisa.'),
('bi bi-heart', 'Emptiers', 'Os emptiers são substâncias aplicadas para promover a eliminação acelerada de gordura localizada através de processos de lipólise. Diferente das enzimas tradicionais, eles têm ação mais profunda e são indicados para áreas com maior acúmulo adiposo, proporcionando resultados mais intensos.'),
('bi bi-heart', 'Carboxiterapia', 'A carboxiterapia utiliza a infusão de dióxido de carbono (CO₂) na pele para melhorar a oxigenação e estimular a circulação. O procedimento é eficaz para tratar celulite, estrias, flacidez e gordura localizada, além de melhorar a textura e firmeza da pele.'),
('bi bi-heart', 'Lavieen', 'O Lavieen, também conhecido como Laser BB Glow, é um laser de Thulium 1927 nm desenvolvido para tratar a superfície da pele com precisão, promovendo clareamento, renovação e uniformização do tom. Ele é indicado para melasma, manchas escuras, poros dilatados, rugas finas, cicatrizes superficiais e textura irregular. A tecnologia atua por meio de microfeixes fracionados que estimulam a renovação celular e a reorganização do pigmento, resultando em uma pele mais clara, luminosa e homogênea. A recuperação é rápida, com leve vermelhidão inicial, e os resultados se intensificam nas semanas seguintes, proporcionando efeito glow e rejuvenescimento natural.');

CREATE TABLE antes_depois_corporais(
id INT AUTO_INCREMENT PRIMARY KEY,
titulo_antes_depois_corporais VARCHAR(255),
imagem_antes_corporais VARCHAR(255),
descricao_antes_corporais TEXT
);

INSERT INTO antes_depois (titulo_antes_depois_corporais , imagem_antes_corporais,descricao_antes_corporais) VALUES
('Criolipólise', '/imagens/Criolipolise.jpeg', 'Redução visível de gordura localizada, melhora do contorno corporal e diminuição de medidas após o processo natural de eliminação das células adiposas.'),
('Lipocavitação', '/imagens/Lipocavitação.PNG', 'Aparecimento de contornos mais definidos, redução de gordura localizada e melhora rápida nas medidas devido à quebra das células de gordura pelo ultrassom.'),
('Lavieen', '/imagens/Lavien.jpeg', 'Clareamento de manchas, melhora do melasma, uniformização do tom da pele e textura mais lisa e luminosa com efeito glow progressivo.'),
('Dermovac', '/imagens/Dermovac.jpeg', 'Redução de celulite, melhora da circulação, suavização de irregularidades da pele e diminuição de retenção de líquidos após a vacuoterapia.');

CREATE TABLE procedimentos_capilares(
id INT AUTO_INCREMENT PRIMARY KEY,
icone_capilar VARCHAR(255),
titulo_capilar VARCHAR (100),
descricao_capilar TEXT
);

INSERT INTO procedimentos_capilares (icone_capilar, titulo_capilar, descricao_capilar) VALUES
('bi bi-heart', 'Ozônioterapia', 'A ozonioterapia capilar utiliza uma mistura de oxigênio e ozônio para melhorar a oxigenação do couro cabeludo, combater micro-organismos e estimular a circulação local. O tratamento ajuda no controle da oleosidade, caspa, dermatite seborreica e queda capilar, além de promover um ambiente saudável para o crescimento dos fios.'),
('bi bi-heart', 'Tratamento Capilar', 'Os tratamentos capilares englobam protocolos personalizados para fortalecer os fios, melhorar a saúde do couro cabeludo e estimular o crescimento. Podem incluir hidratações profundas, detox, nutrição capilar, fortalecimento da fibra e controle de oleosidade ou queda, de acordo com a necessidade de cada paciente.'),
('bi bi-heart', 'MicroAgulhamento Capilar', 'O microagulhamento capilar utiliza microperfurações controladas no couro cabeludo para estimular a produção de colágeno e aumentar a circulação. Esse processo ativa folículos capilares adormecidos e melhora a absorção de ativos, promovendo crescimento de novos fios, fortalecimento e redução da queda.'),
('bi bi-heart', 'PRP', 'O PRP (Plasma Rico em Plaquetas) utiliza o próprio sangue do paciente, concentrando plaquetas e fatores de crescimento que são aplicados no couro cabeludo. O tratamento estimula a regeneração dos folículos capilares, fortalece os fios existentes e favorece o crescimento de novos cabelos, sendo indicado principalmente para queda e afinamento.'),
('bi bi-heart', 'Terapia capilar a laser', 'A terapia capilar a laser de baixa intensidade estimula a circulação e aumenta a atividade celular nos folículos capilares. Com ação anti-inflamatória e regeneradora, o laser fortalece os fios, reduz a queda, melhora a densidade capilar e favorece o crescimento saudável dos cabelos.');

CREATE TABLE antes_depois_capilar (
id INT AUTO_INCREMENT PRIMARY KEY,
titulo_antes_capilar VARCHAR(150),
imagem_antes_capilar VARCHAR(255),
descricao_antes_capilar TEXT
);

INSERT INTO antes_depois_capilar (titulo_antes_capilar,imagem_antes_capilar,descricao_antes_capilar) VALUES
('Tratamento Capilar', '/imagens/TratamentoCapilar.PNG', 'Estimulação do crescimento capilar e fortalecimento dos fios.'),
('MicroAgulhamento Capilar', '/imagens/MicroagulhamentoCapilar.PNG', 'Estímulo do crescimento e recuperação de áreas com rarefação.');

/*Procedimentos faciais*/
CREATE TABLE procedimento_facial(
id INT AUTO_INCREMENT PRIMARY KEY,
icone_facial VARCHAR(255),
titulo_facial VARCHAR(100),
descricao_facial TEXT
);

INSERT INTO procedimento_facial (icone_facial, titulo_facial, descricao_facial) VALUES
('bi bi-heart', 'Toxina botulínica (Botox)', 'A toxina botulínica é utilizada para suavizar rugas e linhas de expressão causadas pela movimentação facial. Ela age relaxando temporariamente os músculos que formam essas marcas, proporcionando um aspecto mais descansado, uniforme e rejuvenescido à pele. Também pode ser usada de forma preventiva, evitando que as rugas se aprofundem com o tempo.'),
('bi bi-heart', 'Preenchimentos faciais (lábios, olheiras, malar, mandíbula, mento)', 'Os preenchimentos faciais utilizam substâncias como o ácido hialurônico para melhorar volume, contorno e simetria do rosto. Podem ser aplicados em várias áreas: nos lábios para maior definição e hidratação; nas olheiras para reduzir o aspecto fundo; na região malar para efeito lifting; na mandíbula para contorno mais marcado; e no mento para equilibrar o perfil. O objetivo é uma harmonização natural e equilibrada.'),
('bi bi-heart', 'Bioestimuladores de colágeno (Sculptura, Radiesse)', 'Os bioestimuladores de colágeno, como Sculptra e Radiesse, são substâncias aplicadas na pele para estimular a produção natural de colágeno, melhorando firmeza, elasticidade e textura. Eles atuam de forma progressiva, ajudando a reduzir flacidez, promover efeito lifting suave e revitalizar a pele, com resultados que podem durar até 24 meses.'),
('bi bi-heart', 'Fios de PDO', 'Os fios de PDO são filamentos absorvíveis que promovem tração e estímulo de colágeno. Existem fios lisos, que melhoram a textura e firmeza da pele, e fios de tração, que proporcionam efeito lifting imediato ao reposicionar os tecidos faciais. Com o tempo, os fios são absorvidos, mas o estímulo de colágeno permanece, deixando a pele mais firme e rejuvenescida.');

CREATE TABLE antes_depois_facial (
id INT AUTO_INCREMENT PRIMARY KEY,
titulo_antes_facial VARCHAR(200),
imagem_antes_facial VARCHAR(255),
descricao_antes_facial TEXT
);

INSERT INTO antes_depois_facial (titulo_antes_facial, imagem_antes_facial , descricao_antes_facial) VALUES
('Preenchimento Labial', '/imagens/PreenchimentoLabial.jpeg', 'Rejuvenescimento e hidratação intensa.'),
('Toxina botulínica (Botox)', '/imagens/Botox.jpeg', 'Pele mais uniforme e luminosa.'),
('Harmonização Facial', '/imagens/Harmonizacao.jpeg', 'Remoção de impurezas e revitalização da pele.');

/*Blog*/
CREATE TABLE blog(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo_post VARCHAR(100),
  descricao_post TEXT,
  beneficios TEXT,
  imagem_post VARCHAR(255)
);

/*bioestimulador post*/
INSERT INTO blog (titulo_post, descricao_post , beneficios, imagem_post) VALUES (
'Bioestimulador de Colágeno',
'O bioestimulador de colágeno é um tratamento indicado para recuperar firmeza, melhorar a qualidade da pele e estimular a produção natural de colágeno. É uma opção eficaz para quem deseja rejuvenescimento progressivo, com resultados naturais e duradouros.
Com a aplicação correta, proporciona melhora visível na firmeza, textura e qualidade da pele, valorizando a beleza de forma natural.',
'Estimula o colágeno natural: ativa as células responsáveis pela produção de colágeno, promovendo firmeza e sustentação gradual da pele.
Melhora textura e qualidade da pele: aumenta o viço, uniformidade e elasticidade, reduzindo poros dilatados e irregularidades.
Redução de flacidez e linhas finas: combate a flacidez leve a moderada e suaviza rugas de forma progressiva.',
'/imagens/BioestimuladorPrincipal.jpg'
);

/*Drenagem post*/
INSERT INTO blog (titulo_post,  descricao_post , beneficios, imagem_post) VALUES (
'Drenagem Linfática',
'A drenagem linfática é uma técnica manual que estimula o sistema linfático a eliminar líquidos, toxinas e inchaços. O método é suave, relaxante e traz benefícios tanto estéticos quanto terapêuticos, melhorando a circulação e o bem-estar geral.
É uma opção ideal para quem busca mais conforto no dia a dia, redução de inchaço e melhora da qualidade de vida, proporcionando leveza e equilíbrio ao corpo.',
'Redução de inchaço: auxilia na eliminação do excesso de líquidos retidos no corpo, diminuindo edemas e proporcionando leveza imediata.
Melhora da circulação: estimula o fluxo linfático e sanguíneo, ajudando na oxigenação dos tecidos e aumentando o bem-estar.
Alívio de tensões e relaxamento: movimentos suaves e rítmicos promovem relaxamento profundo e reduzem desconfortos corporais.',
'/imagens/Drenagem1.jpg'
);

/*preenchimento labial post*/
INSERT INTO blog (titulo_post,  descricao_post , beneficios, imagem_post) VALUES (
'Preenchimento Labial',
'O preenchimento labial é um dos procedimentos estéticos mais procurados atualmente. Ele tem como objetivo realçar a beleza natural dos lábios, corrigir pequenas assimetrias e proporcionar um aspecto mais jovem e harmonioso ao rosto.
Quando realizado com técnica adequada, o procedimento oferece resultados naturais, equilibrados e elegantes, valorizando a estética facial de forma sutil e personalizada.',
'Aumento de volume e definição: redefine o contorno dos lábios, melhora a projeção facial e equilibra o sorriso com naturalidade.
Hidratação profunda: realizado com ácido hialurônico, promove hidratação intensa, deixando os lábios mais macios e com aparência saudável.
Correção de assimetrias: ajusta pequenas diferenças entre os lábios, garantindo um resultado mais uniforme e harmônico.',
'/imagens/CapaPost.jpg'
);

/*Rinomodelação post*/
INSERT INTO blog (titulo_post,  descricao_post , beneficios, imagem_post) VALUES (
'Rinomodelação',
'A rinomodelação é um procedimento não cirúrgico que utiliza preenchedores para corrigir assimetrias, elevar a ponta, alinhar o dorso e melhorar o contorno nasal. A técnica oferece impacto estético imediato sem necessidade de cirurgia.
É uma alternativa segura e eficaz para quem busca melhorar o formato do nariz com naturalidade, promovendo equilíbrio facial e resultados visíveis logo após o procedimento.',
'Harmoniza o perfil: corrige desníveis e deixa o nariz mais alinhado, proporcionando equilíbrio ao rosto.
Elevação e definição da ponta: melhora o ângulo da ponta, oferecendo um aspecto mais refinado.
Resultado imediato: mudanças visíveis na hora, sem necessidade de recuperação e com efeito controlado.',
'/imagens/RinomodelacaoPrincipal.jpg'
);

create table profissionais(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (100),
procedimentos_trabalhados VARCHAR(400),
descricao_profissional TEXT,
imagem_profissional VARCHAR(255)
);

INSERT INTO profissionais (nome, procedimentos_trabalhados, descricao_profissional, imagem_profissional) VALUES
(
'Karla Furtado',
'Criolipólise e Dermovac, Microagulhamento, Ultrafomer, Laser Lavieen, Depilação a LED, Criomodelagem 360, Criofrequência, Limpeza de pele e Peelings, Redução de medidas, Tratamento para celulite, Estrias e Flacidez, Tratamentos para queda de cabelo',
'Conheça nossos procedimentos estéticos e descubra como podemos ajudá-lo(a) a realçar sua beleza e cuidar da sua pele e corpo.',
'/imagens/karla.jpg'
),

(
'Valéria Ferreira',
'Acolhimento e Escuta Empática, Autoestima e Imagem Corporal, Ansiedade e Nível Alto de Cortisol, Saúde Mental e Hábitos de Autocuidado',
'Valéria Ferreira é uma psicóloga com vasta experiência no campo da psicologia clínica e da saúde mental. Sua paixão pela psicologia aliada à área da estética surgiu da crença de que o cuidado com a beleza e a autoestima estão intrinsecamente ligados ao equilíbrio emocional. Ela acredita que a estética vai além da aparência física e pode ser uma ferramenta poderosa para promover a saúde emocional e psicológica dos indivíduos.',
'/imagens/Valeria.png'
),

(
'Kauany Bellucco',
'Insônia e Disbiose Intestinal, Tratamento facial: acne e manchas, Bruxismo/DTM, Emagrecimento, Estresse e Ansiedade, TPM e Menopausa, Alergias como rinite alérgica, Dores crônicas ou agudas, Massagem Intraoral, Massagem com Guashas, Terapia com Cristais, Neurocosméticos, Aromaterapia, Manobras especiais de alongamento, Stiperterapia Auricular',
'Especialista em realinhamento cutâneo, com vasta experiência na área da estética. Seus procedimentos são conhecidos por proporcionar resultados notáveis e duradouros.',
'/imagens/Kauany.png'
);

/*Formulario de duvidas*/
CREATE TABLE formulario_duvidas (
id INT AUTO_INCREMENT PRIMARY KEY,
nome_completo VARCHAR(150) NOT NULL,
email VARCHAR(150) NOT NULL,
telefone VARCHAR(20),
duvida TEXT NOT NULL
);

/*Formulario de agendamento*/
CREATE TABLE agendamento (
id INT AUTO_INCREMENT PRIMARY KEY,
nome_agendamento VARCHAR(150) NOT NULL,
email_agendamento VARCHAR(150) NOT NULL,
telefone_agendamento VARCHAR(20) NOT NULL,
tipo ENUM('consulta', 'capilar', 'facial', 'corporal', 'esmalteria') NOT NULL,
data_desejada DATE
);