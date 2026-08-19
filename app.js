const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const FALLBACK_PHOTO = "Penha-SC_Praia_da_Armação.jpg";
const PARKSNET_URL = "https://parksnet.com.br/destino/santa-catarina?cupom=BCL0115";

function commons(file, width = 900) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

const img = (folder, n) => `./media/${folder}/${String(n).padStart(2, "0")}.jpg`;
const icon = (name) => `./icons/${name}.svg`;
const gallery = (folder, count) => Array.from({ length: count }, (_, i) => img(folder, i + 1));

function spot(name, address, extras = {}) {
  return {
    name,
    address,
    query: extras.query || `${name} ${address}`,
    ...extras,
  };
}

const COMMONS = {
  "Beto Carrero World": "Novo_Castelo_BCW.jpg",
  "Praia do Trapiche": "Entardecer_na_Praia_do_Trapiche_-_SC.JPG",
  "Praia da Paciência": "Penha-SC_Praia_da_Paciência.jpg",
  "Praia Grande": "Por do Sol-Penha SC.jpg",
  "Praia Vermelha": "RenatoSoares_PraiaVermelha_Penha_SC_(40434982784).jpg",
  "Praia do Quilombo": "Mulher de Penha.png",
  "Praia da Armação": "Penha-SC_Praia_da_Armação.jpg",
  "Praia da Bacia da Vovó": "RenatoSoares_PraiadaVovo_Penha_SC_(39337624840).jpg",
  "Praia de São Miguel": "Penha-SC_Praia_da_Paciência.jpg",
  "Praia Alegre": "RenatoSoares_PraiaVermelha_Penha_SC_(41103275922).jpg",
};

const SECTIONS = [
  {
    id: "parksnet",
    tone: "sun",
    eyebrow: "01 · Dica de ouro",
    title: "Ingressos e descontos",
    lead: "Parceria com a Parksnet: ingressos com desconto e sem fila para mais de 160 atrações da região — parques, passeios e restaurantes.",
    offer: {
      brand: "Parksnet",
      coupon: "BCL0115",
      url: PARKSNET_URL,
      qr: "./media/parksnet/qr.png",
      attractions: "Oceanic Aquarium, Unipraias, Alles Park, Aventura Jurássica, Barco Pirata, Cristo Luz e outras.",
      steps: [
        "Escaneie o QR Code ou use o cupom BCL0115.",
        "Escolha os passeios em Santa Catarina.",
        "Compre com antecedência no cartão (parcelado sem juros) ou no Pix.",
      ],
    },
    places: [],
  },
  {
    id: "turismo",
    tone: "sun",
    eyebrow: "02 · Penha",
    title: "Pontos turísticos",
    lead: "Parques, mirantes, passeios e patrimônio no município. O Beto Carrero fica a poucos minutos da casa.",
    gallery: gallery("pontos-tursiticos-de-penha", 8),
    groups: [
      {
        title: "Parques e lazer",
        places: [
          spot("Beto Carrero World", "Rod. Beto Carrero World — Armação, Penha · SC", {
            featured: true,
            note: "Maior parque temático da América Latina. Chegue no início do dia.",
          }),
          spot("Parque Terra Atlântica", "Av. Elizabeth K. Reis, 95 — Armação, Penha", {
            note: "Entretenimento infantil e contato com a Mata Atlântica.",
            photo: img("pontos-tursiticos-de-penha", 2),
          }),
          spot("Casa Maluca SC", "R. Olindio Rodolfo de Souza, 407 — Armação, Penha", {
            note: "Atração interativa com cenários e ilusões de ótica.",
            photo: img("pontos-tursiticos-de-penha", 3),
          }),
        ],
      },
      {
        title: "Passeios e aventura",
        places: [
          spot("Summit Adventures — voos de parapente", "R. do Turismo, 500 — Armação, Penha", {
            note: "Voos duplos com instrutores credenciados e vista da orla.",
          }),
          spot("Penha Passeios", "Av. Alfredo Brunetti, 288 — Armação, Penha", {
            note: "Embarque para passeio de buggy pelos mirantes da cidade.",
            query: "Penha Passeios Av. Alfredo Brunetti 288 Armação Penha",
          }),
          spot("Capitão Gato Escuna Pirata", "R. Arno Volpi, 14 — Ponte do Rio Piçarras, Penha", {
            note: "Passeio de escuna até a Ilha Feia, com parada para banho.",
          }),
        ],
      },
      {
        title: "Natureza e mirantes",
        places: [
          spot("Ponta da Vigia", "Armação, Penha · SC", {
            note: "Mirante no extremo da orla, indicado para o pôr do sol.",
          }),
          spot("Trilha e Cachoeira da Praia Vermelha", "Acesso pela R. do Turismo — Armação, Penha", {
            note: "Caminhada pela Mata Atlântica até a cachoeira e a praia.",
          }),
          spot("Trilha da Galheta e Galhetinha", "Final da R. Pedro Nascimento — São Miguel, Penha", {
            note: "Percurso de média intensidade entre morros e mirantes.",
          }),
          spot("Praia do Poá", "R. José Camilo da Rosa, 681 — Armação, Penha", {
            note: "Praia reservada, cercada por vegetação nativa.",
          }),
        ],
      },
      {
        title: "Patrimônio e orla",
        places: [
          spot("Igreja São João Batista", "Av. São João, 1054 — Armação, Penha", {
            note: "Capela histórica da colonização açoriana.",
            photo: img("pontos-tursiticos-de-penha", 8),
          }),
          spot("Trapiche de Penha", "Praia da Armação, Penha · SC", {
            note: "Caminhada, pôr do sol e embarque para passeios náuticos.",
            photo: img("praias-de-penha", 1),
          }),
        ],
      },
    ],
  },
  {
    id: "praias",
    tone: "sea",
    eyebrow: "03 · Litoral",
    title: "Praias",
    lead: "Praias de Penha organizadas por tipo de passeio: pôr do sol, gastronomia, família, surf e estrutura urbana.",
    gallery: gallery("praias-de-penha", 11).filter((_, i) => i !== 5),
    groups: [
      {
        title: "Pôr do sol",
        note: "Os pontos mais procurados para o fim da tarde.",
        places: [
          spot("Praia do Cascalho", "Penha · SC", {
            note: "Faixa de pedras, um dos pontos mais conhecidos para o pôr do sol.",
            photo: img("praias-de-penha", 2),
          }),
          spot("Ponta da Vigia", "Armação, Penha · SC", {
            note: "Mirante no topo do morro, com vista da orla.",
          }),
        ],
      },
      {
        title: "Gastronomia açoriana",
        note: "Vilas de pescadores e orla com restaurantes à beira-mar.",
        places: [
          spot("Praia de São Miguel", "Gravatá, Penha · SC", {
            note: "Vila de pescadores com restaurantes pé na areia e frutos do mar.",
          }),
          spot("Praia do Trapiche", "Armação, Penha · SC", {
            note: "Orla com barcos, bares e restaurantes à beira-mar.",
          }),
        ],
      },
      {
        title: "Família e mar calmo",
        places: [
          spot("Praia da Bacia da Vovó", "Av. Pref. Henrique Assis — Centro, Penha", {
            note: "Piscinas naturais, mar sem ondas e sombra de árvores.",
          }),
          spot("Praia Alegre", "Penha · SC", {
            note: "Águas rasas, calçadão e boa para stand-up paddle.",
          }),
        ],
      },
      {
        title: "Surf, natureza e trilha",
        places: [
          spot("Praia Vermelha", "Ac. Praia Vermelha — Armação, Penha", {
            note: "Praia preservada, Mata Atlântica e ondas para surf.",
          }),
          spot("Praia da Paciência", "Penha · SC", {
            note: "Enseada no pé do morro, acesso por trilha e águas claras.",
          }),
        ],
      },
      {
        title: "Estrutura e conveniência",
        places: [
          spot("Praia da Armação", "Armação, Penha · SC", {
            note: "Orla extensa, com quiosques, farmácias e comércio.",
          }),
          spot("Praia Grande", "Penha · SC", {
            note: "Mar aberto, bares, restaurantes e posto de guarda-vidas.",
          }),
          spot("Praia do Quilombo", "Av. Elizabeth Konder Reis — Centro, Penha", {
            note: "Calçadão, areia mais grossa, ondas para surf e quiosques.",
          }),
        ],
      },
    ],
  },
  {
    id: "regiao",
    tone: "coral",
    eyebrow: "04 · Entorno",
    title: "Região",
    lead: "Piçarras fica ao lado. Balneário Camboriú, Itajaí e o Vale estão a um passeio de carro.",
    gallery: gallery("pontos-principais-balneario-picarras", 6).concat(gallery("pontos-turisticos-da-regiao", 6)),
    groups: [
      {
        title: "Balneário Piçarras",
        note: "Cidade vizinha, mar calmo e orla com bandeira azul.",
        places: [
          spot("Praia de Piçarras", "Av. José Temistócles de Macedo — Balneário Piçarras", {
            note: "Faixa de areia extensa, calçadão e mar calmo.",
            photo: img("pontos-principais-balneario-picarras", 1),
          }),
          spot("Molhe Sul da Barra do Rio Piçarras", "Av. 50 — Barra do Rio Piçarras", {
            note: "Caminhada, pesca e pôr do sol na divisa com Penha.",
          }),
          spot("Escuna Vó Nica", "Centro, Balneário Piçarras · SC", {
            note: "Passeio marítimo pelas praias e ilhas da região.",
            query: "Escuna Vó Nica Balneário Piçarras",
          }),
          spot("Museu Oceanográfico Univali", "Av. Sambaqui, 318 — Santo Antônio, Balneário Piçarras", {
            note: "Acervo de biodiversidade marinha, incluindo esqueletos de baleias.",
          }),
        ],
      },
      {
        title: "Balneário Camboriú",
        note: "Cerca de 35 a 40 km.",
        places: [
          spot("Roda Gigante de Balneário Camboriú", "Estr. da Rainha, 1009 — Pioneiros, Balneário Camboriú", {
            note: "Vista da orla em cabines climatizadas. ~35 km.",
            photo: img("pontos-turisticos-da-regiao", 1),
          }),
          spot("Parque Unipraias", "Av. Atlântica, 6006 — Centro, Balneário Camboriú", {
            note: "Bondinhos até Laranjeiras, tirolesa e trenó. ~38 km.",
          }),
          spot("Classic Car Show", "Av. Normando Tedesco, 5720 — Centro, Balneário Camboriú", {
            note: "Museu de automóveis clássicos. ~40 km.",
          }),
          spot("Praia Central", "Av. Atlântica — Centro, Balneário Camboriú", {
            note: "Calçadão, quiosques e a orla urbana da cidade. ~38 km.",
          }),
          spot("Praia Brava", "Praia Brava — Itajaí / Balneário Camboriú", {
            note: "Ondas fortes e beach clubs. ~30 km.",
          }),
        ],
      },
      {
        title: "Um pouco mais longe",
        places: [
          spot("Píer Turístico de Itajaí", "Av. Pref. Paulo Bauer, 755 — Centro, Itajaí", {
            note: "Atracação de cruzeiros, junto ao Mercado Público. ~24 km.",
          }),
          spot("Parque Aquático Cascanéia", "R. José Patrocínio dos Santos, 2355 — Gaspar", {
            note: "Parque aquático na Rota das Águas. ~50 km.",
          }),
          spot("FIP — Feira da Moda", "Rod. Antônio Heil, km 23, 3800 — Brusque", {
            note: "Polo têxtil e compras de fábrica. ~55 km.",
          }),
          spot("Ponte Hercílio Luz", "Centro, Florianópolis · SC", {
            note: "Cartão-postal da capital. ~115 km.",
          }),
        ],
      },
    ],
  },
  {
    id: "comer",
    tone: "peach",
    eyebrow: "05 · Gastronomia",
    title: "Comer e beber",
    lead: "Restaurantes, sushi, pizza, lanches, padarias e opções à beira-mar em Penha, com indicações também em Piçarras.",
    gallery: gallery("restaurantes-de-penha", 8)
      .concat(gallery("bara-lanchonete-frente-praia-penha", 6))
      .concat(gallery("pizzarias-penha", 4)),
    groups: [
      {
        title: "Frutos do mar e tradicionais",
        places: [
          spot("Restaurante Casa do Tempero", "R. Maria Emília de Costa, 250 — Armação, Penha", {
            note: "Almoço de frutos do mar. Sequência de camarão e peixes grelhados.",
            photo: img("restaurantes-de-penha", 1),
          }),
          spot("Petisqueira Alírio", "Av. Elizabeth K. Reis, 26 — Armação, Penha", {
            note: "Beira-mar. Mariscos, casquinha de siri e peixe frito.",
            photo: img("restaurantes-de-penha", 2),
          }),
          spot("Lindomar Restaurante e Petisqueira", "Av. Antônio J. Tavares, 1920 — Centro, Penha", {
            note: "Tradicional no Centro. Buffet e à la carte de frutos do mar.",
            photo: img("bara-lanchonete-frente-praia-penha", 1),
          }),
          spot("Sombreiro", "R. Itajaí, 91 — Armação, Penha", {
            note: "Peixes grelhados, moquecas e sequências de camarão.",
            photo: img("restaurantes-de-penha", 4),
          }),
        ],
      },
      {
        title: "Carnes, caseiro e experiências",
        places: [
          spot("Talho Terra e Mar", "Av. Alfredo Brunetti, 16 — Armação, Penha", {
            note: "Cortes na parrilla e frutos do mar, à beira-mar.",
            photo: img("restaurantes-de-penha", 5),
            query: "Talho Terra e Mar Restaurante Penha",
          }),
          spot("Restaurante e Espetinho do Goiano", "Av. Eugênio Krause, 581 — Centro, Penha", {
            note: "Almoço caseiro, marmitex e espetinhos no Centro.",
            photo: img("restaurantes-de-penha", 6),
          }),
          spot("Rancho do Lago Refúgio Gastronômico", "R. Ângelo Domingos Teodoro, 450 — N. Sra. de Fátima, Penha", {
            note: "Jantar em contato com a natureza. Carta de vinhos.",
            photo: img("restaurantes-de-penha", 7),
          }),
        ],
      },
      {
        title: "Beira-mar",
        places: [
          spot("Bahama Mamma", "R. Waldemar Werner, 50 — Praia Grande, Penha", {
            note: "Drinks e petiscos com vista para a Praia Grande.",
            photo: img("bara-lanchonete-frente-praia-penha", 10),
            query: "Bahama Mamma restaurante e bar Penha",
          }),
          spot("Pacífico", "Av. São João, 229 — Armação, Penha", {
            note: "Gastropub à beira-mar. Chope, petiscos e música ao vivo.",
          }),
          spot("Porto Penha Food Park", "Av. Alfredo Brunetti, 484 — Armação, Penha", {
            note: "Vila gastronômica a poucos passos do mar.",
          }),
          spot("Restaurante Omar", "R. Abraão João Francisco, 46 — Praia Alegre, Penha", {
            note: "Frutos do mar e mesas pé na areia, anexo à Pousada Pedra da Ilha.",
          }),
          spot("Serafins restaurante", "Adolfo Baugarten, 1533 — Gravatá / São Miguel, Penha", {
            note: "Peixes frescos e jardim com vista para a orla de São Miguel.",
          }),
          spot("Cauim Praia", "R. João Manoel de Souza, 182 — Quilombo, Penha", {
            note: "Gastrobar pé na areia na Praia do Quilombo.",
          }),
        ],
      },
      {
        title: "Sushi",
        places: [
          spot("Penha Sushi", "Av. Alfredo Brunetti, 471 — Armação, Penha", {
            note: "Combinados, temakis e à la carte, perto do Beto Carrero.",
          }),
          spot("Seikatsu Sushi", "Av. Eugênio Krause, 640 — Centro, Penha", {
            note: "Opção central, com mesas ao ar livre.",
          }),
          spot("Yonkou Sushi", "R. Timóteo Perfeito Flores, 2736 — Gravatá, Penha", {
            note: "Buffet livre e delivery, anexo ao Posto Parque 24h.",
            photo: img("sushis-penha", 1),
            query: "Yonkou Sushi buffet Penha",
          }),
          spot("Miyagi Do Sushibar", "Av. Alfredo Brunetti, 471 — Armação, Penha", {
            note: "Peças tradicionais, sashimi e hots em Armação.",
          }),
        ],
      },
      {
        title: "Pizzarias",
        places: [
          spot("Lá Bella Fatia", "Centro, Penha · SC", {
            note: "Salão e delivery. Massa bem avaliada.",
            query: "Lá Bella Fatia Penha SC",
          }),
          spot("Pizzaria Maria Gabriela", "Av. Antônio J. Tavares, 614 — Centro, Penha", {
            note: "Salgadas e doces, no Centro.",
          }),
          spot("Foggia Pizzaria", "Av. Eugênio Krause — Centro, Penha", {
            note: "Pizza artesanal, massa fina e crocante.",
            photo: img("pizzarias-penha", 1),
            query: "Foggia Pizzaria Penha",
          }),
          spot("Pizzaria Toscana", "Centro, Penha · SC", {
            note: "Forno a lenha.",
            query: "Pizzaria Toscana Penha forno a lenha",
          }),
          spot("La Cazza Pizzaria", "Av. São João, 15 — Armação, Penha", {
            note: "Perto das praias e do Beto Carrero.",
          }),
          spot("Pizza Big", "Av. Nereu Ramos, 1425 — Praia Alegre, Penha", {
            note: "Pizzas grandes. Delivery até a madrugada.",
          }),
          spot("Pizzaria Don Diovani", "R. Inácio Francisco de Souza, 234 — Armação, Penha", {
            note: "Massa artesanal em Armação.",
          }),
          spot("Chef Jhon Pizzas & Esfihas", "R. Beijamin Flôr, 67 — Armação, Penha", {
            note: "Pizzas e esfihas, com delivery rápido.",
          }),
        ],
      },
      {
        title: "Lanches",
        places: [
          spot("Burger Films — Centro", "Av. Eugênio Krause, 3045 — Armação, Penha", {
            note: "Hamburgueria temática de cinema.",
            photo: img("lanches-em-penha", 1),
            query: "Burger Films Hamburgueria Penha Eugênio Krause",
          }),
          spot("Burger Films — Brunetti", "Av. Alfredo Brunetti, 631 — Armação, Penha", {
            note: "Segunda unidade, na Armação.",
            photo: img("lanches-em-penha", 2),
          }),
          spot("Kustom Burgers", "Av. Eugênio Krause, 3425 — Centro, Penha", {
            note: "Burgers artesanais e molhos da casa.",
            photo: img("lanches-em-penha", 3),
          }),
          spot("Júlio Lanches", "Av. Nereu Ramos, 473 — Centro, Penha", {
            note: "X-salada prensado. Área kids.",
            photo: img("lanches-em-penha", 4),
          }),
          spot("Babico Pastelaria", "Av. Antônio J. Tavares, 349 — Centro, Penha", {
            note: "Pastéis fritos na hora, caldos no inverno.",
            photo: img("lanches-em-penha", 5),
          }),
        ],
      },
      {
        title: "Padarias e cafeterias",
        places: [
          spot("Lupã Praia Alegre", "Av. Nereu Ramos, 1443 — Centro, Penha", {
            note: "Pães, tortas e café da manhã na Praia Alegre.",
            photo: img("cafeterias-penha", 1),
          }),
          spot("Panificadora Lupã — Centro", "Av. Eugênio Krause, 530 — Centro, Penha", {
            note: "Salgados, pães e café no Centro.",
            photo: img("cafeterias-penha", 2),
          }),
          spot("Lupã Armação", "Av. Eugênio Krause, 4368 — Armação, Penha", {
            note: "Padaria no caminho da praia da Armação.",
            photo: img("cafeterias-penha", 3),
          }),
          spot("Pães e Doces Lupã — Gravatá", "R. São Miguel, 4045, sl. 01 — Gravatá, Penha", {
            note: "Confeitaria e panificação no Gravatá.",
            photo: img("cafeterias-penha", 4),
          }),
          spot("Damay Café e Confeitaria", "Av. Eugênio Krause, 957 — Centro, Penha", {
            note: "Cafés especiais e tortas. Anexo ao Anjo Dourado.",
            photo: img("cafeterias-penha", 5),
          }),
          spot("Panificadora e Confeitaria HS", "Av. Eugênio Krause, 2737 — Armação, Penha", {
            note: "Padaria de bairro na Armação.",
            photo: img("cafeterias-penha", 6),
          }),
        ],
      },
      {
        title: "Piçarras",
        places: [
          spot("Restaurante do Capitão", "Av. José Temistócles de Macedo, 300 — Balneário Piçarras", {
            note: "Frutos do mar na beira-mar. Sequência de camarão.",
          }),
          spot("North Beach", "Av. José Temistócles de Macedo, 1034 — Balneário Piçarras", {
            note: "Restaurante e bar à beira-mar, com deck.",
          }),
          spot("Galgos — Cozinha do Mar", "Av. Nereu Ramos, 650 — Centro, Balneário Piçarras", {
            note: "Frutos do mar e culinária contemporânea.",
          }),
          spot("Cordazzo's", "Av. Nereu Ramos, 343 — Centro, Balneário Piçarras", {
            note: "Pizzaria e cantina italiana. Rodízio à noite.",
          }),
        ],
      },
    ],
  },
  {
    id: "servicos",
    tone: "sand",
    eyebrow: "06 · Comércio e serviços",
    title: "Serviços",
    lead: "Supermercados, lavanderias, postos de combustível e oficinas em Penha.",
    groups: [
      {
        title: "Mercados",
        places: [
          spot("Supermercado Koch — Centro", "Av. Eugênio Krause, 1994 — Centro, Penha", {
            note: "Opção mais completa no Centro. Hortifrúti, açougue e padaria.",
            photo: icon("market"),
          }),
          spot("Fort Atacadista", "R. Abílio de Souza, 750 — Armação, Penha", {
            note: "Atacado em frente ao Beto Carrero. Compras em volume.",
            photo: icon("market"),
            query: "Fort Atacadista Penha",
          }),
          spot("Supermercado Koch — Armação", "Av. Eugênio Krause, 4150 — Armação, Penha", {
            note: "Unidade próxima às praias do sul.",
            photo: icon("market"),
          }),
          spot("Rede TOP", "Av. Nereu Ramos, 523 — Centro, Penha", {
            note: "Compras rápidas no Centro. Padaria e rotisseria.",
            photo: icon("market"),
            query: "Rede TOP Supermercados Penha",
          }),
          spot("Mercado Silva", "Av. Eugênio Krause, 1606 — Centro, Penha", {
            note: "Mercado de bairro para o essencial.",
            photo: icon("market"),
          }),
          spot("Super Ferreira", "R. Nilo Anastácio Vieira, 470 — Centro, Penha", {
            note: "Mercearia, padaria e açougue no Centro.",
            photo: icon("market"),
          }),
        ],
      },
      {
        title: "Lavanderias",
        places: [
          spot("Lavô Penha", "Posto Ipiranga — Av. Eugênio Krause, 631, Centro", {
            note: "Self-service, 24 horas.",
            photo: icon("shop"),
          }),
          spot("Penha Lavanderia", "R. Nilo Anastácio Vieira, 389 — Centro, Penha", {
            note: "Lavagem tradicional no Centro.",
            photo: icon("shop"),
          }),
          spot("Lavanderia Maria Express", "Av. Eugênio Krause, 3075, sala 1 — Armação, Penha", {
            note: "Das 6h à meia-noite, na Armação.",
            photo: icon("shop"),
          }),
          spot("Lavanderia Lavaê", "Av. Antônio J. Tavares, 177 — Centro, Penha", {
            note: "Das 7h às 22h30.",
            photo: icon("shop"),
          }),
          spot("Lavanderia Quatro Estações", "R. José Cirício de Souza, 85 — Armação, Penha", {
            note: "Segunda a sábado, na Armação.",
            photo: icon("shop"),
          }),
        ],
      },
      {
        title: "Postos de combustível",
        places: [
          spot("Posto Delta", "Av. Nereu Ramos, 1497 — Centro, Penha", {
            note: "24 horas, na orla da Praia Alegre.",
            photo: img("posto-combustivel-penha", 1),
          }),
          spot("Posto Mime", "Penha · SC", {
            note: "24 horas, no acesso principal.",
            query: "Posto Mime Penha SC",
            photo: img("posto-combustivel-penha", 2),
          }),
          spot("Posto Minardi", "Av. Eugênio Krause, 631 — Centro, Penha", {
            note: "Ipiranga no Centro. Segunda a sábado até 22h.",
            photo: img("posto-combustivel-penha", 3),
          }),
          spot("Posto Alpha", "Av. Nereu Ramos, 1096 — Centro, Penha", {
            note: "Segunda a sábado das 6h às 22h.",
            photo: img("posto-combustivel-penha", 4),
          }),
          spot("Posto Penha", "Av. Eugênio Krause, 2825 — Centro, Penha", {
            note: "Na Avenida Eugênio Krause.",
            photo: img("posto-combustivel-penha", 5),
          }),
        ],
      },
      {
        title: "Oficinas",
        places: [
          spot("Auto Jota Car Center", "Av. Antônio J. Tavares, 101 — Centro, Penha", {
            note: "Mecânica geral, pneus, alinhamento 3D e check-up.",
            photo: img("oficinas-penha", 1),
          }),
          spot("Speed Motors", "R. João Abraão, 204 — Centro, Penha", {
            note: "Diagnóstico computadorizado, suspensão e freios.",
            photo: img("oficinas-penha", 2),
            query: "Speed Motors Centro Automotivo Penha",
          }),
          spot("Oficina Mecânica Hangar89", "R. Duque de Caxias, 198 — Centro, Penha", {
            note: "Preventiva, corretiva e emergências.",
            photo: img("oficinas-penha", 3),
          }),
          spot("Auto Mecânica Sílvio", "Av. Eugênio Krause, 3360 — Armação, Penha", {
            note: "Motor, suspensão, freios e alinhamento na Armação.",
            photo: img("oficinas-penha", 4),
          }),
          spot("Mallmann's Mecânica", "R. Nilo Anastácio Vieira, 1681 — N. Sra. de Fátima, Penha", {
            note: "Mecânica geral e peças.",
            photo: img("oficinas-penha", 5),
            query: "Mallmann Comércio e Mecânica Automotiva Penha",
          }),
          spot("Mello Auto Elétrica", "R. Timóteo Perfeito Flores, 3330 — Gravatá, Penha", {
            note: "Elétrica e eletrônica. Bateria, partida e alternador.",
            photo: img("oficinas-penha", 6),
          }),
          spot("Auto mecânica Nuno", "R. Vila Nova, 850 — Centro, Penha", {
            note: "Reparos preventivos e emergenciais.",
            photo: img("oficinas-penha", 7),
          }),
        ],
      },
    ],
  },
  {
    id: "emergencia",
    tone: "sos",
    eyebrow: "07 · Emergência",
    title: "Emergência",
    lead: "Polícia, pronto atendimento, hospitais, clínicas e farmácias. Em urgência, ligue antes de ir.",
    emergency: true,
    groups: [
      {
        title: "Segurança",
        places: [
          spot("Polícia Militar", "R. Maria Emília de Costa, 50 — Armação, Penha", {
            phone: "190",
            phoneHref: "tel:190",
            note: "Atendimento 24 horas.",
            photo: icon("pm"),
          }),
          spot("Polícia Civil", "R. Luiz José Nori, 77 — Centro, Penha", {
            phone: "197",
            phoneHref: "tel:197",
            note: "Segunda a sexta, das 12h às 19h.",
            photo: icon("pc"),
          }),
        ],
      },
      {
        title: "Saúde",
        places: [
          spot("Pronto Atendimento 24 horas", "R. Alfeu Jerônimo da Conceição, 225 — Centro, Penha", {
            phone: "(47) 3240-0284",
            phoneHref: "tel:+554732400284",
            note: "Urgências e emergências no município. 24 horas.",
            photo: icon("star-of-life"),
          }),
          spot("Hospital da Penha", "R. Calisto Luiz Honório, 415 — Centro, Penha", {
            note: "Consultas e exames. Segunda a sexta, das 7h às 18h.",
            photo: icon("hospital"),
          }),
          spot("Hospital Marieta Konder Bornhausen", "Av. Cel. Marcos Konder, 1111 — Centro, Itajaí", {
            note: "Referência regional de média e alta complexidade. 24 horas.",
            photo: icon("hospital"),
          }),
          spot("LV Clínica da Família", "Av. Nereu Ramos, 1155, sl. 01 — Praia Alegre, Penha", {
            note: "Especialidades. Segunda a sexta, das 8h às 19h.",
            photo: icon("clinic"),
            query: "LV Clínica da Família Penha",
          }),
          spot("MEDClínica Piçarras", "Av. Emanoel Pinto, 925 — Centro, Balneário Piçarras", {
            note: "Consultas e exames. Segunda a sexta, das 7h às 18h.",
            photo: icon("clinic"),
          }),
        ],
      },
      {
        title: "Farmácias",
        places: [
          spot("Farmácia FarmaFaita 24 horas", "Av. Eugênio Krause, 1361 — Centro, Penha", {
            note: "Única farmácia 24 horas de Penha.",
            photo: icon("pharmacy"),
          }),
          spot("Farmácia FarmaFaita Centro", "Av. Eugênio Krause, 204 — Centro, Penha", {
            note: "Segunda a sábado das 7h às 21h; domingo até 12h.",
            photo: icon("pharmacy"),
          }),
          spot("Farmácia Preço Popular", "Av. Eugênio Krause, 395 — Centro, Penha", {
            note: "Todos os dias, das 7h à meia-noite.",
            photo: icon("pharmacy"),
          }),
          spot("Farmácia São João", "Av. Eugênio Krause, 586 — Centro, Penha", {
            note: "Segunda a sábado até 23h; domingo até 22h.",
            photo: icon("pharmacy"),
          }),
          spot("Farmácias Preço Fácil", "R. Nilo Anastácio Vieira, 449 — Centro, Penha", {
            note: "Segunda a sábado das 7h30 às 21h.",
            photo: icon("pharmacy"),
          }),
          spot("Super Popular", "Av. Eugênio Krause, 495 — Centro, Penha", {
            note: "Masterfarma, na avenida central.",
            photo: icon("pharmacy"),
            query: "Super Popular Masterfarma Penha",
          }),
        ],
      },
    ],
  },
];

const guideEl = document.querySelector("[data-guide]");
const emptyEl = document.querySelector("[data-empty]");
const metaEl = document.querySelector("[data-results-meta]");
const searchForm = document.querySelector("[data-search]");
const searchInput = searchForm.querySelector("input");
const header = document.querySelector(".site-header");

const iconPin = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21z"/>
    <circle cx="12" cy="9.8" r="2.2"/>
  </svg>
`;

const iconCopy = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="8" y="8" width="11" height="12" rx="2"/>
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"/>
  </svg>
`;

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function photoFor(place) {
  if (place.photo) return place.photo;
  const entry = COMMONS[place.name] || FALLBACK_PHOTO;
  if (/^https?:\/\//.test(entry) || entry.startsWith("./")) return entry;
  return commons(entry, place.featured ? 1400 : 900);
}

function isSymbol(place) {
  const src = photoFor(place);
  return src.startsWith("./icons/");
}

function placeMatches(place, term) {
  if (!term) return true;
  return normalize(`${place.name} ${place.address} ${place.note || ""}`).includes(term);
}

function sectionText(section) {
  return [
    section.title,
    section.lead,
    section.eyebrow,
    section.offer?.coupon,
    section.offer?.brand,
    section.offer?.attractions,
    "parksnet ingresso desconto cupom",
  ].join(" ");
}

function renderPlace(place, { sos = false } = {}) {
  const featured = place.featured ? " is-featured" : "";
  const sosClass = sos ? " is-sos" : "";
  const phone = place.phone
    ? `<a class="phone" href="${place.phoneHref}">${place.phone}</a>`
    : "";
  const note = place.note ? `<p class="place-note">${place.note}</p>` : "";
  const symbolClass = isSymbol(place) ? " is-symbol" : "";
  const fallback = isSymbol(place) ? "" : ` onerror="this.onerror=null;this.src='${commons(FALLBACK_PHOTO)}'"`;

  return `
    <article class="place${featured}${sosClass}">
      <div class="place-photo${symbolClass}">
        <img src="${photoFor(place)}" alt="${place.name}" loading="lazy"${fallback} />
      </div>
      <div class="place-copy">
        <h3>${place.name}</h3>
        <p>${place.address}</p>
        ${note}
        ${phone}
      </div>
      <div class="place-actions">
        <button class="btn" type="button" data-copy="${place.address}">
          ${iconCopy}
          <span>Copiar</span>
        </button>
        <a class="btn btn-map" href="${mapsUrl(place.query)}" target="_blank" rel="noopener noreferrer">
          ${iconPin}
          Abrir no Maps
        </a>
      </div>
    </article>
  `;
}

function renderPlaces(places, options) {
  if (!places?.length) return "";
  return `<div class="places">${places.map((place) => renderPlace(place, options)).join("")}</div>`;
}

function renderGallery(urls = []) {
  if (!urls.length) return "";
  return `
    <div class="photo-strip" aria-label="Fotos da seção">
      ${urls
        .slice(0, 8)
        .map((src) => `<img src="${src}" alt="" loading="lazy" />`)
        .join("")}
    </div>
  `;
}

function renderVideos(urls = []) {
  if (!urls.length) return "";
  return `
    <div class="video-grid">
      ${urls
        .map(
          (src, index) => `
            <video controls playsinline preload="metadata" poster="">
              <source src="${src}" type="video/mp4" />
              Vídeo ${index + 1}
            </video>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOffer(offer) {
  if (!offer) return "";
  return `
    <div class="offer-card">
      <div class="offer-copy">
        <p class="offer-brand">${offer.brand}</p>
        <p>Parques, passeios e restaurantes em Santa Catarina. ${offer.attractions}</p>
        <ol>
          ${offer.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <div class="offer-actions">
          <button class="btn" type="button" data-copy="${offer.coupon}">
            ${iconCopy}
            <span>Cupom ${offer.coupon}</span>
          </button>
          <a class="btn btn-map" href="${offer.url}" target="_blank" rel="noopener noreferrer">Abrir Parksnet</a>
        </div>
      </div>
      <figure class="offer-qr">
        <img src="${offer.qr}" alt="QR Code Parksnet com o cupom ${offer.coupon}" />
        <figcaption>Escaneie o QR Code</figcaption>
      </figure>
    </div>
  `;
}

function allPlaces(section) {
  if (section.groups) return section.groups.flatMap((group) => group.places);
  return section.places || [];
}

function filterSection(section, term) {
  if (!term) return section;
  const offerHit = normalize(sectionText(section)).includes(term);
  if (section.groups) {
    const groups = section.groups
      .map((group) => ({
        ...group,
        places: group.places.filter((place) => placeMatches(place, term)),
      }))
      .filter((group) => group.places.length);
    if (groups.length) return { ...section, groups, videos: offerHit ? section.videos : [] };
    return offerHit ? { ...section, groups: [], places: [] } : null;
  }
  const places = (section.places || []).filter((place) => placeMatches(place, term));
  if (places.length || offerHit) return { ...section, places };
  return null;
}

function countPlaces(section) {
  return allPlaces(section).length + (section.offer ? 1 : 0);
}

function renderSection(section) {
  const groups = section.groups
    ? section.groups
        .map(
          (group) => `
            <div class="subgroup">
              <h3>${group.title}</h3>
              ${group.note ? `<p>${group.note}</p>` : ""}
            </div>
            ${renderPlaces(group.places, { sos: section.emergency })}
          `
        )
        .join("")
    : renderPlaces(section.places, { sos: section.emergency });

  const banner = section.emergency
    ? `
      <div class="emergency-banner">
        <div>
          <h3>Guarde estes números.</h3>
          <p>Em urgência, ligue. Os cards abaixo abrem o endereço no Maps.</p>
        </div>
        <div class="hotlines">
          <a href="tel:190"><strong>190</strong><span>Polícia Militar</span></a>
          <a href="tel:192"><strong>192</strong><span>SAMU</span></a>
          <a href="tel:193"><strong>193</strong><span>Bombeiros</span></a>
        </div>
      </div>
    `
    : "";

  return `
    <section class="group" id="${section.id}" data-tone="${section.tone}">
      <header class="group-head">
        <p class="eyebrow">${section.eyebrow}</p>
        <h2>${section.title}</h2>
        <p>${section.lead}</p>
      </header>
      ${renderOffer(section.offer)}
      ${renderVideos(section.videos)}
      ${banner}
      ${renderGallery(section.gallery)}
      ${groups}
    </section>
  `;
}

function render(term = "") {
  const filtered = SECTIONS.map((section) => filterSection(section, term)).filter(Boolean);
  const total = filtered.reduce((sum, section) => sum + countPlaces(section), 0);

  guideEl.innerHTML = filtered.map(renderSection).join("");
  emptyEl.hidden = filtered.length > 0;
  metaEl.hidden = !term;

  if (term) {
    metaEl.textContent = total === 1 ? "1 resultado" : `${total} resultados`;
  }

  bindMotion();
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchInput.addEventListener("input", (event) => {
  render(normalize(event.target.value.trim()));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput && !event.metaKey && !event.ctrlKey) {
    event.preventDefault();
    searchInput.focus();
  }
});

guideEl.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;

  const value = button.dataset.copy;
  try {
    await navigator.clipboard.writeText(value);
    const label = button.querySelector("span");
    const previous = label.textContent;
    label.textContent = "Copiado";
    button.classList.add("is-pop");
    window.setTimeout(() => {
      label.textContent = previous;
      button.classList.remove("is-pop");
    }, 1400);
  } catch {
    window.prompt("Copie:", value);
  }
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  },
  { passive: true }
);

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let motionObserver;

function bindMotion() {
  const nodes = guideEl.querySelectorAll(".place, .group-head, .subgroup, .emergency-banner, .offer-card, .photo-strip, .video-grid");

  if (!motionOk) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }

  motionObserver?.disconnect();
  motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        motionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  nodes.forEach((el, index) => {
    el.style.setProperty("--d", `${(index % 8) * 45}ms`);
    motionObserver.observe(el);
  });

  if (!finePointer) return;

  guideEl.querySelectorAll(".place").forEach((card) => {
    card.addEventListener("pointermove", tiltCard);
    card.addEventListener("pointerleave", untiltCard);
  });
}

function tiltCard(event) {
  const card = event.currentTarget;
  if (!card.classList.contains("is-in")) return;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) scale(1.02)`;
}

function untiltCard(event) {
  event.currentTarget.style.transform = "";
}

if (motionOk && finePointer) {
  const glow = document.querySelector(".cursor-glow");
  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    },
    { passive: true }
  );
}

render();
