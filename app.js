const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const FALLBACK_PHOTO = "Penha-SC_Praia_da_Armação.jpg";

function commons(file, width = 900) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

const PHOTOS_BY_NAME = {
  "Beto Carrero World": "Novo_Castelo_BCW.jpg",
  "Praia do Trapiche": "Entardecer_na_Praia_do_Trapiche_-_SC.JPG",
  "Praia da Paciência": "Penha-SC_Praia_da_Paciência.jpg",
  "Praia de São Roque": "RenatoSoares_PraiadeArmação_Penha_SC_(41146962261).jpg",
  "Praia Grande": "Por do Sol-Penha SC.jpg",
  "Praia Vermelha": "RenatoSoares_PraiaVermelha_Penha_SC_(40434982784).jpg",
  "Praia do Quilombo": "Mulher de Penha.png",
  "Praia da Armação": "Penha-SC_Praia_da_Armação.jpg",
  "Praia da Saudade": "RenatoSoares_PraiadaVovo_Penha_SC_(39337624840).jpg",
  "Praia da Fortaleza": "RenatoSoares_Capela_deSaoJoaoBatista_Penha_SC_(39337693060).jpg",
  "Praia da Bacia da Vovó": "RenatoSoares_PraiadaVovo_Penha_SC_(39337624840).jpg",
  "Praia de São Miguel": "Penha-SC_Praia_da_Paciência.jpg",
  "Praia Alegre": "RenatoSoares_PraiaVermelha_Penha_SC_(41103275922).jpg",
  "Penha Passeios": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio (3).jpg",
  "Summit Adventures — voos de parapente": "Por do Sol penha-Sc.jpg",
  "Petisqueira Alírio": "RenatoSoares_ArmaçaodoItapocoroi_Penha_SC_(40251904205).jpg",
  "Lindomar Restaurante e Petisqueira": "Penha-SC_Praia_da_Paciência.jpg",
  "Sombreiro": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio.jpg",
  "Challenge FoodHouse": "Por do Sol-Penha SC.jpg",
  "Restaurante e Espetinho do Goiano": "RenatoSoares_PraiadeArmação_Penha_SC_(27714940058).jpg",
  "Casa Ibérica": "RenatoSoares_ArmaçaodoItapocoroi_Penha_SC_(41147356861).jpg",
  "Seikatsu Sushi": "RenatoSoares_PraiadeArmação_Penha_SC_(41103368712).jpg",
  "Casarão Trembão": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio (1).jpg",
  "Rancho do Lago Refúgio Gastronômico": "Por do Sol-Penha SC.jpg",
  "Na Garagem Burguer's": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio (2).jpg",
  "Julio Lanches": "Penha-SC_Praia_da_Armação.jpg",
  "Kustom Burgers Penha": "RenatoSoares_ArmaçaodoItapocoroi_Penha_SC_(40251856275).jpg",
  "Porto Penha Food Park": "RenatoSoares_ArmaçaodoItapocoroi_Penha_SC_(39337965050).jpg",
  "Don Diovani Penha": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio (3).jpg",
  "Big Pizza Penha": "RenatoSoares_PraiaVermelha_Penha_SC_(41103275922).jpg",
  "Praça Rippa": "Por do Sol penha-Sc.jpg",
  "Pacífico Bar": "Entardecer_na_Praia_do_Trapiche_-_SC.JPG",
  "Pacífico": "Entardecer_na_Praia_do_Trapiche_-_SC.JPG",
  "Challenge Rock": "Por do Sol-Penha SC.jpg",
  "Challenge Beats": "Mulher de Penha.png",
  "Rede TOP Supermercados": "./icons/market.svg",
  "Super Ferreira": "./icons/market.svg",
  "Supermercado Koch": "./icons/market.svg",
  "Panificadora Lupã": "./icons/bakery.svg",
  "Milium": "./icons/shop.svg",
  "Loja Tormen Atacado e Varejo": "./icons/shop.svg",
  "Anjo Dourado": "./icons/shop.svg",
  "Lavô Penha": "Penha-SC_Praia_da_Paciência.jpg",
  "Posto Minardi": "Penha-SC_Praia_da_Armação.jpg",
  "Polaco Auto Mecânica": "Praia de Armação do Itapocorói, Penha - SC, Brazil - panoramio.jpg",
  "Polícia Militar": "./icons/pm.svg",
  "Polícia Civil": "./icons/pc.svg",
  "Pronto Atendimento 24 horas": "./icons/star-of-life.svg",
  "Hospital Marieta Konder Bornhausen": "./icons/hospital.svg",
  "LV Clínica da Família": "./icons/clinic.svg",
  "MEDClínica Piçarras": "./icons/clinic.svg",
  "Farmácia 24 horas": "./icons/pharmacy.svg",
};

function photoFor(place) {
  const entry = PHOTOS_BY_NAME[place.name] || FALLBACK_PHOTO;
  if (/^https?:\/\//.test(entry) || entry.startsWith("./")) return entry;
  return commons(entry, place.featured ? 1400 : 900);
}

function isSymbol(place) {
  const entry = PHOTOS_BY_NAME[place.name];
  return Boolean(entry && entry.startsWith("./icons/"));
}

const SECTIONS = [
  {
    id: "turismo",
    tone: "sun",
    eyebrow: "01 · o motivo da viagem",
    title: "Beto Carrero World",
    lead: "A uns minutos da casa. Chega cedo, volta só quando as pernas pedirem arrego.",
    places: [
      {
        name: "Beto Carrero World",
        address: "Rod. Beto Carrero World — Armação, Penha · SC",
        query: "Beto Carrero World Armação Penha SC",
        featured: true,
      },
    ],
  },
  {
    id: "praias",
    tone: "sea",
    eyebrow: "02 · molha o pé",
    title: "Praias",
    lead: "Tem pra pescar, pra pular onda e pra ir com criança. Escolhe o clima do dia.",
    groups: [
      {
        title: "Pra pescar",
        note: "Mar mais calmo, trapiche e aquela manhã sem pressa.",
        places: [
          {
            name: "Praia do Trapiche",
            address: "Armação, Penha · SC",
            query: "Praia do Trapiche Armação Penha SC",
          },
          {
            name: "Praia da Paciência",
            address: "Penha · SC",
            query: "Praia da Paciência Penha SC",
          },
          {
            name: "Praia de São Roque",
            address: "R. do Turismo, 2242-2290 — Armação, Penha",
            query: "Praia de São Roque Armação Penha SC",
          },
        ],
      },
      {
        title: "Mais agitadas",
        note: "Onda, movimento e energia de verão.",
        places: [
          {
            name: "Praia Grande",
            address: "Penha · SC",
            query: "Praia Grande Penha SC",
          },
          {
            name: "Praia Vermelha",
            address: "Ac. Praia Vermelha — Armação, Penha",
            query: "Praia Vermelha Armação Penha SC",
          },
        ],
      },
      {
        title: "Pra curtir",
        note: "Caminhada, pôr do sol e zero compromisso.",
        places: [
          {
            name: "Praia do Quilombo",
            address: "Penha · SC",
            query: "Praia do Quilombo Penha SC",
          },
          {
            name: "Praia da Armação",
            address: "Armação, Penha · SC",
            query: "Praia da Armação Penha SC",
          },
          {
            name: "Praia da Saudade",
            address: "Penha · SC",
            query: "Praia da Saudade Penha SC",
          },
          {
            name: "Praia da Fortaleza",
            address: "Av. Itapocorói, 1735 — Armação, Penha",
            query: "Praia da Fortaleza Armação Penha SC",
          },
        ],
      },
      {
        title: "Com as crianças",
        note: "Água mais rasa e ritmo mais leve.",
        places: [
          {
            name: "Praia da Paciência",
            address: "Penha · SC",
            query: "Praia da Paciência Penha SC",
          },
          {
            name: "Praia da Bacia da Vovó",
            address: "Av. Pref. Henrique Assis — Centro, Penha",
            query: "Praia da Bacia da Vovó Penha SC",
          },
          {
            name: "Praia de São Miguel",
            address: "R. José Cesário, 91 — Gravatá, Penha",
            query: "Praia de São Miguel Penha SC",
          },
          {
            name: "Praia do Trapiche",
            address: "Armação, Penha · SC",
            query: "Praia do Trapiche Armação Penha SC",
          },
          {
            name: "Praia Alegre",
            address: "Penha · SC",
            query: "Praia Alegre Penha SC",
          },
        ],
      },
    ],
  },
  {
    id: "aventura",
    tone: "coral",
    eyebrow: "03 · sobe, desce, acelera",
    title: "Parapente e buggy",
    lead: "Pra quem cansou de só olhar o mar de baixo.",
    places: [
      {
        name: "Penha Passeios",
        address: "R. Alfredo Brunette, 288 — Armação, Penha",
        query: "Penha Passeios R. Alfredo Brunette 288 Armação Penha",
      },
      {
        name: "Summit Adventures — voos de parapente",
        address: "R. do Turismo, 500 — Armação, Penha",
        query: "Summit Adventures Voos de Parapente Armação Penha",
      },
    ],
  },
  {
    id: "comer",
    tone: "peach",
    eyebrow: "04 · fome de férias",
    title: "Comer & beber",
    lead: "Sushi, pizza, petisco, burger e uma noite mais longa se der vontade.",
    groups: [
      {
        title: "Restaurantes",
        places: [
          {
            name: "Petisqueira Alírio",
            address: "Av. Elizabeth K. Reis, 26 — Armação, Penha",
            query: "Petisqueira Alírio Armação Penha",
          },
          {
            name: "Lindomar Restaurante e Petisqueira",
            address: "Av. Antônio Joaquim Tavares, 1920 — Centro, Penha",
            query: "Lindomar Restaurante e Petisqueira Penha",
          },
          {
            name: "Sombreiro",
            address: "R. Itajaí, 91 — Armação, Penha",
            query: "Restaurante Sombreiro Armação Penha",
          },
          {
            name: "Challenge FoodHouse",
            address: "Av. Emanuel Pinto, 202 — Centro, Balneário Piçarras",
            query: "Challenge FoodHouse Balneário Piçarras",
          },
          {
            name: "Restaurante e Espetinho do Goiano",
            address: "Av. Eugênio Krause, 581 — Centro, Penha",
            query: "Espetinho do Goiano Penha SC",
          },
          {
            name: "Casa Ibérica",
            address: "Praia Grande — Armação, Penha · reserva",
            query: "Casa Ibérica Penha SC",
          },
        ],
      },
      {
        title: "Sushi",
        places: [
          {
            name: "Seikatsu Sushi",
            address: "Av. Eugênio Krause, 640 — Centro, Penha",
            query: "Seikatsu Sushi Penha SC",
          },
        ],
      },
      {
        title: "Lanchonetes",
        places: [
          {
            name: "Casarão Trembão",
            address: "R. Inácio Francisco de Souza, 1600 — Armação, Penha",
            query: "Casarão Trembão Penha SC",
          },
          {
            name: "Rancho do Lago Refúgio Gastronômico",
            address: "R. Ângelo Domingos Teodoro, 450 — N. Sra. de Fátima",
            query: "Rancho do Lago Refúgio Gastronômico Penha",
          },
          {
            name: "Na Garagem Burguer's",
            address: "Penha · SC",
            query: "Na Garagem Burgers Penha SC",
          },
          {
            name: "Julio Lanches",
            address: "Av. Nereu Ramos, 473 — Centro, Penha",
            query: "Julio Lanches Penha SC",
          },
          {
            name: "Kustom Burgers Penha",
            address: "Av. Eugênio Krause, 3425 — Penha",
            query: "Kustom Burgers Penha SC",
          },
          {
            name: "Porto Penha Food Park",
            address: "Av. Alfredo Brunetti, 484 — Armação, Penha",
            query: "Porto Penha Food Park Armação",
          },
        ],
      },
      {
        title: "Pizzaria",
        places: [
          {
            name: "Don Diovani Penha",
            address: "R. Inácio Francisco de Souza, 234 — Armação, Penha",
            query: "Don Diovani Pizza Penha SC",
          },
          {
            name: "Big Pizza Penha",
            address: "Av. Nereu Ramos, 1425 — Praia Alegre, Penha",
            query: "Big Pizza Penha SC",
          },
        ],
      },
      {
        title: "Beira da praia",
        places: [
          {
            name: "Praça Rippa",
            address: "Av. Nereu Ramos, 780 — Balneário Piçarras",
            query: "Praça Rippa Balneário Piçarras",
          },
          {
            name: "Pacífico Bar",
            address: "Av. São João, 229 — Armação, Penha",
            query: "Pacífico Bar Armação Penha",
          },
        ],
      },
      {
        title: "A noite",
        places: [
          {
            name: "Pacífico",
            address: "Av. São João, 229 — Armação, Penha",
            query: "Pacífico Armação Penha SC",
          },
          {
            name: "Challenge Rock",
            address: "Av. Emanuel Pinto, 312, 2º andar — Centro, Piçarras",
            query: "Challenge Rock Balneário Piçarras",
          },
          {
            name: "Challenge Beats",
            address: "Av. Getúlio Vargas, 96, 2º andar — Centro, Piçarras",
            query: "Challenge Beats Balneário Piçarras",
          },
        ],
      },
    ],
  },
  {
    id: "servicos",
    tone: "sand",
    eyebrow: "05 · a vida real ainda existe",
    title: "Serviços",
    lead: "Mercado, pão quente, lavanderia e posto — o básico pra continuar de férias.",
    groups: [
      {
        title: "Mercados",
        places: [
          {
            name: "Rede TOP Supermercados",
            address: "Av. Nereu Ramos, 473 — Centro, Penha",
            query: "Rede TOP Supermercados Penha SC",
          },
          {
            name: "Super Ferreira",
            address: "R. Anastácio Vieira, 470 — Centro, Penha",
            query: "Super Ferreira Penha SC",
          },
          {
            name: "Supermercado Koch",
            address: "Av. Eugênio Krause, 4150 — Armação, Penha",
            query: "Supermercado Koch Armação Penha",
          },
        ],
      },
      {
        title: "Padaria",
        places: [
          {
            name: "Panificadora Lupã",
            address: "Av. Eugênio Krause, 4368 — Armação, Penha",
            query: "Panificadora Lupã Armação Penha",
          },
        ],
      },
      {
        title: "Comércio",
        places: [
          {
            name: "Milium",
            address: "Av. Eugênio Krause, 360 — Centro, Penha",
            query: "Milium Av Eugênio Krause Penha",
          },
          {
            name: "Loja Tormen Atacado e Varejo",
            address: "Av. Eugênio Krause, 661, sala 1 — Centro, Penha",
            query: "Loja Tormen Penha SC",
          },
          {
            name: "Anjo Dourado",
            address: "Av. Eugênio Krause, 957 — Centro, Penha",
            query: "Anjo Dourado Penha SC",
          },
        ],
      },
      {
        title: "Lavanderia",
        places: [
          {
            name: "Lavô Penha",
            address: "Posto Ipiranga — Av. Eugênio Krause, 631, Centro",
            query: "Lavanderia Lavô Penha Av Eugênio Krause",
          },
        ],
      },
      {
        title: "Para o carro",
        places: [
          {
            name: "Posto Minardi",
            address: "Av. Eugênio Krause, 631 — Centro, Penha",
            query: "Posto Minardi Penha SC",
          },
          {
            name: "Polaco Auto Mecânica",
            address: "R. Inácio Jacinto Albano, 173 — Armação, Penha",
            query: "Polaco Auto Mecânica Armação Penha",
          },
        ],
      },
    ],
  },
  {
    id: "emergencia",
    tone: "sos",
    eyebrow: "06 · se der ruim",
    title: "Emergência",
    lead: "Torcer pra não usar. Se precisar, liga primeiro — depois vê o mapa.",
    emergency: true,
    places: [
      {
        name: "Polícia Militar",
        address: "R. Maria Emília Costa, 50 — Armação, Penha",
        query: "Polícia Militar Armação Penha SC",
        phone: "190",
        phoneHref: "tel:190",
      },
      {
        name: "Polícia Civil",
        address: "Penha · SC",
        query: "Polícia Civil Penha SC",
        phone: "197",
        phoneHref: "tel:197",
      },
      {
        name: "Pronto Atendimento 24 horas",
        address: "R. Alfeu Jerônimo da Conceição, 225 — Centro, Penha",
        query: "Pronto Atendimento 24h Penha SC",
        phone: "(47) 3240-0284",
        phoneHref: "tel:+554732400284",
      },
      {
        name: "Hospital Marieta Konder Bornhausen",
        address: "Av. Marcos Konder, 1111 — Centro, Itajaí",
        query: "Hospital Marieta Konder Bornhausen Itajaí",
      },
      {
        name: "LV Clínica da Família",
        address: "Penha · SC",
        query: "LV Clínica da Família Penha SC",
      },
      {
        name: "MEDClínica Piçarras",
        address: "Balneário Piçarras · SC",
        query: "MEDClínica Piçarras",
      },
      {
        name: "Farmácia 24 horas",
        address: "FarmaFaita — Av. Eugênio Krause, 1361, Centro",
        query: "Farmácia FarmaFaita 24 horas Penha",
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

function placeMatches(place, term) {
  if (!term) return true;
  return normalize(`${place.name} ${place.address}`).includes(term);
}

function renderPlace(place, { sos = false, section = null } = {}) {
  const featured = place.featured ? " is-featured" : "";
  const sosClass = sos ? " is-sos" : "";
  const phone = place.phone
    ? `<a class="phone" href="${place.phoneHref}">${place.phone}</a>`
    : "";

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
        ${phone}
      </div>
      <div class="place-actions">
        <button class="btn" type="button" data-copy="${place.address}">
          ${iconCopy}
          <span>Copiar</span>
        </button>
        <a class="btn btn-map" href="${mapsUrl(place.query)}" target="_blank" rel="noopener noreferrer">
          ${iconPin}
          Me leva
        </a>
      </div>
    </article>
  `;
}

function renderPlaces(places, options) {
  return `<div class="places">${places.map((place) => renderPlace(place, options)).join("")}</div>`;
}

function filterSection(section, term) {
  if (section.groups) {
    const groups = section.groups
      .map((group) => ({
        ...group,
        places: group.places.filter((place) => placeMatches(place, term)),
      }))
      .filter((group) => group.places.length);

    return groups.length ? { ...section, groups } : null;
  }

  const places = section.places.filter((place) => placeMatches(place, term));
  return places.length ? { ...section, places } : null;
}

function countPlaces(section) {
  if (section.groups) {
    return section.groups.reduce((total, group) => total + group.places.length, 0);
  }
  return section.places.length;
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
            ${renderPlaces(group.places, { sos: section.emergency, section })}
          `
        )
        .join("")
    : renderPlaces(section.places, { sos: section.emergency, section });

  const banner = section.emergency
    ? `
      <div class="emergency-banner">
        <div>
          <h3>Guarda estes números.</h3>
          <p>Se for urgente, liga. Os cards abaixo abrem o endereço no Maps.</p>
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
      ${banner}
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
    metaEl.textContent =
      total === 1 ? "1 lugar no radar" : `${total} lugares no radar`;
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
    label.textContent = "Já era";
    button.classList.add("is-pop");
    window.setTimeout(() => {
      label.textContent = "Copiar";
      button.classList.remove("is-pop");
    }, 1400);
  } catch {
    window.prompt("Copie o endereço:", value);
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
  const nodes = guideEl.querySelectorAll(".place, .group-head, .subgroup, .emergency-banner");

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
