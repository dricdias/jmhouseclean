"use client";

import { useEffect, useState } from "react";

type Copy = {
  nav: string[];
  callLabel: string;
  navCta: string;
  hero: { eyebrow: string; title1: string; title2: string; text: string; cta: string };
  about: {
    sub: string; title: string; text: string; cta: string;
    care: { title: string; text: string };
  };
  services: {
    sub: string; title: string; text: string;
    features: string[];
    items: { title: string; text: string; cta: string }[];
  };
  why: {
    sub: string; title: string; caption: string;
    items: { title: string; text: string }[];
  };
  results: {
    sub: string; title: string; text: string;
    pairs: { title: string; text: string; before: string; after: string }[];
  };
  process: {
    sub: string; title: string;
    steps: { title: string; text: string; step: string }[];
    bottomTitle: string; bottomCta: string;
  };
  marquee: string[];
  faq: {
    sub: string; title: string; cardTitle: string; cardCta: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; button: string };
  contact: {
    sub: string; title: string; text: string;
    typeLabel: string; types: string[];
    suppliesLabel: string; supplies: string[];
    submit: string; note: string;
    phoneLabel: string; emailLabel: string; areaLabel: string; area: string;
  };
  footer: {
    servicesTitle: string; services: string[];
    companyTitle: string; company: { label: string; href: string }[];
    availabilityTitle: string; availability: string;
    consult: string; copyright: string;
  };
};

const PHONE_DISPLAY = "(475) 800-6931";
const PHONE_HREF = "tel:+14758006931";
const EMAIL = "jeane555rocha@gmail.com";

const copy: Record<"pt" | "en", Copy> = {
  pt: {
    nav: ["Serviços", "Antes e Depois", "Como Funciona", "Dúvidas", "Contato"],
    callLabel: "Ligar agora",
    navCta: "Solicitar Orçamento",
    hero: {
      eyebrow: "Limpeza residencial com cuidado pessoal",
      title1: "Uma casa impecável",
      title2: "começa aqui",
      text: "A Jeane Matos House Clean cuida da sua casa com a mesma atenção e carinho que cuidaria da dela. Do primeiro reset ao último detalhe.",
      cta: "Solicitar orçamento grátis",
    },
    about: {
      sub: "Sobre a Jeane",
      title: "Redefinindo o cuidado com a sua casa",
      text: "Cada casa tem sua própria rotina, seus próprios cantos que pedem atenção. A Jeane trabalha de perto com cada cliente para entender exatamente o que a sua casa precisa — e devolve um espaço leve, limpo e pronto para a vida acontecer.",
      cta: "Ver serviços",
      care: { title: "Cuidado em cada detalhe", text: "Da cozinha ao quarto, cada cômodo recebe atenção total — sem pressa, sem atalhos." },
    },
    services: {
      sub: "Área de Atendimento",
      title: "O que cuidamos na sua casa",
      text: "Serviços pensados para o seu dia a dia, com um acabamento que você sente assim que entra em casa.",
      features: ["Produtos de qualidade", "Pontualidade", "Preço justo", "Cuidado pessoal"],
      items: [
        { title: "Limpeza Residencial", text: "Um reset completo para os ambientes que fazem parte do seu dia a dia — salas, quartos e áreas comuns.", cta: "Solicitar orçamento" },
        { title: "Cozinha e Banheiro", text: "Os detalhes de maior uso, finalizados com paciência e precisão: fogão, pia, box e tudo mais.", cta: "Solicitar orçamento" },
        { title: "Limpeza de Mudança", text: "Um novo começo para uma casa nova — ou uma despedida cuidadosa da casa antiga, com cada canto pronto.", cta: "Solicitar orçamento" },
      ],
    },
    why: {
      sub: "Por que nos escolher",
      title: "Comprometida com a excelência em cada limpeza",
      caption: "O resultado que você sente assim que entra em casa.",
      items: [
        { title: "Cuidado Pessoal", text: "A Jeane cuida pessoalmente de cada casa, com atenção que só um trabalho feito de perto entrega." },
        { title: "Produtos de Qualidade", text: "Produtos eficazes e seguros para sua família e seus pets — ou os produtos da sua preferência, se você tiver." },
        { title: "Satisfação Garantida", text: "Se algo não ficou do jeito que você esperava, a gente conversa e resolve." },
      ],
    },
    results: {
      sub: "Resultados Reais",
      title: "Antes e depois que falam por si",
      text: "Fotos reais de casas cuidadas pela Jeane Matos House Clean — sem filtro, sem exagero.",
      pairs: [
        { title: "Fogão", text: "Da gordura acumulada ao brilho de estreia.", before: "/work/project-13.jpeg", after: "/work/project-16.jpeg" },
        { title: "Pia do Banheiro", text: "De manchada e encardida a limpa até o brilho.", before: "/work/project-03.jpeg", after: "/work/project-06.jpeg" },
        { title: "Cozinha", text: "De bagunça do dia a dia a ambiente pronto para receber.", before: "/work/project-05.jpeg", after: "/work/project-15.jpeg" },
      ],
    },
    process: {
      sub: "Como Funciona",
      title: "O processo por trás de cada brilho",
      steps: [
        { step: "Passo Um", title: "Agende sua Limpeza", text: "Chame no telefone, WhatsApp ou e-mail e conte um pouco sobre sua casa." },
        { step: "Passo Dois", title: "A Jeane Cuida de Tudo", text: "Cada cômodo recebe atenção completa, do começo ao fim, no seu ritmo." },
        { step: "Passo Três", title: "Aproveite o Resultado", text: "Volte para uma casa limpa, organizada e pronta para a vida acontecer." },
      ],
      bottomTitle: "Eleve o cuidado com o seu espaço",
      bottomCta: "Ver serviços",
    },
    marquee: ["Cada Cantinho Reluz", "Seu Espaço, Nosso Cuidado", "Sinta a Diferença de um Lar Limpo", "Limpeza em Quem Você Confia"],
    faq: {
      sub: "Dúvidas",
      title: "Respostas para as principais perguntas",
      cardTitle: "Ficou com alguma dúvida?",
      cardCta: "Fale Comigo",
      items: [
        { q: "Quais tipos de limpeza vocês oferecem?", a: "Limpeza residencial completa, limpeza pesada de cozinha e banheiro, e limpeza de mudança (entrada ou saída). Cada visita é combinada de acordo com o que sua casa precisa." },
        { q: "Como eu agendo uma limpeza?", a: "É só chamar no telefone, WhatsApp ou e-mail. A gente conversa sobre sua casa, combina o dia e o horário que funcionam melhor para você." },
        { q: "Quem faz a limpeza da minha casa?", a: "A própria Jeane, pessoalmente. Cada casa recebe cuidado direto dela, do início ao fim da visita." },
        { q: "Quais produtos são usados?", a: "Uso produtos de limpeza de qualidade. Se você preferir que eu use os produtos da sua casa, sem problema — é só combinar antes." },
        { q: "Como funciona um cancelamento ou reagendamento?", a: "Só peço um aviso com antecedência para conseguir reorganizar a agenda direitinho." },
      ],
    },
    cta: { title: "Agende sua limpeza profissional hoje", button: "Solicitar Orçamento" },
    contact: {
      sub: "Vamos Conversar",
      title: "Vamos renovar a sensação da sua casa",
      text: "Conte um pouco sobre o seu espaço e eu te retorno com os próximos passos.",
      typeLabel: "Tipo de Limpeza",
      types: ["Limpeza Residencial", "Cozinha e Banheiro", "Limpeza de Mudança", "Ainda não sei"],
      suppliesLabel: "Já tem produtos de limpeza em casa?",
      supplies: ["Sim, tenho os produtos", "Não, prefiro que a Jeane leve"],
      submit: "Solicitar Orçamento",
      note: "Ao clicar, seu e-mail abre com uma mensagem pronta para a Jeane — só ajustar e enviar.",
      phoneLabel: "Telefone",
      emailLabel: "E-mail",
      areaLabel: "Área Atendida",
      area: "Sarasota, FL",
    },
    footer: {
      servicesTitle: "Serviços",
      services: ["Limpeza Residencial", "Cozinha e Banheiro", "Limpeza de Mudança"],
      companyTitle: "Jeane Matos House Clean",
      company: [{ label: "Sobre", href: "#about" }, { label: "Antes e Depois", href: "#antes-depois" }, { label: "Contato", href: "#contact" }],
      availabilityTitle: "Atendimento",
      availability: "Sob agendamento, em Sarasota, FL.",
      consult: "Solicitar Orçamento Grátis",
      copyright: "© 2026 Jeane Matos House Clean",
    },
  },
  en: {
    nav: ["Services", "Before & After", "How It Works", "FAQ", "Contact"],
    callLabel: "Call now",
    navCta: "Request a Quote",
    hero: {
      eyebrow: "Residential cleaning, made personal",
      title1: "A spotless home",
      title2: "starts here",
      text: "Jeane Matos House Clean cares for your home with the same attention she'd give her own. From the first reset to the very last detail.",
      cta: "Request a free quote",
    },
    about: {
      sub: "About Jeane",
      title: "Redefining the way your home gets cared for",
      text: "Every home has its own rhythm, its own corners that need attention. Jeane works closely with every client to understand exactly what your home needs — and hands back a space that feels light, clean, and ready for real life.",
      cta: "See services",
      care: { title: "Care in every detail", text: "From the kitchen to the bedroom, every room gets full attention — no rushing, no shortcuts." },
    },
    services: {
      sub: "Service Area",
      title: "What we care for in your home",
      text: "Services shaped around your everyday, finished in a way you can feel the moment you walk in.",
      features: ["Quality products", "On-time, every time", "Fair pricing", "Personal care"],
      items: [
        { title: "Home Cleaning", text: "A complete reset for the rooms that carry your everyday — living rooms, bedrooms, and common areas.", cta: "Request a quote" },
        { title: "Kitchen & Bath", text: "The high-touch details, finished with patience and precision: stove, sink, shower and beyond.", cta: "Request a quote" },
        { title: "Move-In / Move-Out", text: "A fresh start for a new home — or a careful goodbye to the old one, with every corner ready.", cta: "Request a quote" },
      ],
    },
    why: {
      sub: "Why Choose Us",
      title: "Committed to excellence in every clean",
      caption: "The feeling you get the moment you walk in.",
      items: [
        { title: "Personal Care", text: "Jeane personally cares for every home, with the attention only hands-on work can give." },
        { title: "Quality Products", text: "Effective, safe products for your family and pets — or your own preferred products, if you have them." },
        { title: "Satisfaction Guaranteed", text: "If something isn't quite right, we'll talk it through and make it right." },
      ],
    },
    results: {
      sub: "Real Results",
      title: "Before and afters that speak for themselves",
      text: "Real photos from homes cared for by Jeane Matos House Clean — no filter, no exaggeration.",
      pairs: [
        { title: "Stove", text: "From built-up grease to a like-new shine.", before: "/work/project-13.jpeg", after: "/work/project-16.jpeg" },
        { title: "Bathroom Sink", text: "From stained and grimy to spotless.", before: "/work/project-03.jpeg", after: "/work/project-06.jpeg" },
        { title: "Kitchen", text: "From everyday clutter to guest-ready.", before: "/work/project-05.jpeg", after: "/work/project-15.jpeg" },
      ],
    },
    process: {
      sub: "How It Works",
      title: "The process behind every shine",
      steps: [
        { step: "Step One", title: "Book Your Cleaning", text: "Call, text, or email and tell us a little about your home." },
        { step: "Step Two", title: "Jeane Gets to Work", text: "Every room gets full attention, start to finish, at your pace." },
        { step: "Step Three", title: "Enjoy the Result", text: "Come home to a clean, organized space, ready for real life." },
      ],
      bottomTitle: "Elevate the care your space gets",
      bottomCta: "See services",
    },
    marquee: ["Making Every Corner Shine", "Your Space, Our Care", "Feel the Clean Difference", "Cleaning You Can Trust"],
    faq: {
      sub: "FAQ",
      title: "Answers to your most common questions",
      cardTitle: "Still have a question?",
      cardCta: "Get in Touch",
      items: [
        { q: "What types of cleaning do you offer?", a: "Full home cleaning, deep kitchen and bathroom cleaning, and move-in/move-out cleaning. Every visit is shaped around what your home actually needs." },
        { q: "How do I book a cleaning?", a: "Just call, text, or email. We'll talk through your home and find a day and time that works for you." },
        { q: "Who cleans my home?", a: "Jeane, personally. Every home gets her direct, hands-on care from start to finish." },
        { q: "What products do you use?", a: "I bring quality cleaning products. If you'd rather I use the products already in your home, that's fine too — just let me know ahead of time." },
        { q: "What's your cancellation or rescheduling policy?", a: "Just a heads-up ahead of time so I can rearrange the schedule." },
      ],
    },
    cta: { title: "Book your professional cleaning today", button: "Request a Quote" },
    contact: {
      sub: "Let's Talk",
      title: "Let's make your home feel renewed",
      text: "Tell me a little about your space and I'll follow up with next steps.",
      typeLabel: "Type of Cleaning",
      types: ["Home Cleaning", "Kitchen & Bath", "Move-In / Move-Out", "Not sure yet"],
      suppliesLabel: "Do you already have cleaning supplies at home?",
      supplies: ["Yes, I have supplies", "No, please bring your own"],
      submit: "Request a Quote",
      note: "Clicking this opens your email with a message ready for Jeane — just adjust and send.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      areaLabel: "Service Area",
      area: "Sarasota, FL",
    },
    footer: {
      servicesTitle: "Services",
      services: ["Home Cleaning", "Kitchen & Bath", "Move-In / Move-Out"],
      companyTitle: "Jeane Matos House Clean",
      company: [{ label: "About", href: "#about" }, { label: "Before & After", href: "#antes-depois" }, { label: "Contact", href: "#contact" }],
      availabilityTitle: "Availability",
      availability: "By appointment, serving Sarasota, FL.",
      consult: "Request a Free Quote",
      copyright: "© 2026 Jeane Matos House Clean",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("en");
  const t = copy[language];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    language === "pt" ? "Orçamento de limpeza - Jeane Matos House Clean" : "Cleaning quote - Jeane Matos House Clean"
  )}`;

  return (
    <div className={"page-wrapper" + (mobileOpen ? " mobile-menu-visible" : "")}>
      <link rel="stylesheet" href="/cleanify/css/bootstrap.min.css" precedence="p1" />
      <link rel="stylesheet" href="/cleanify/css/style.css" precedence="p2" />
      <link rel="stylesheet" href="/cleanify/css/custom.css" precedence="p3" />

      <div className="back-to-top-wrapper">
        <button
          id="back_to_top"
          type="button"
          className={"back-to-top-btn" + (showTop ? " back-to-top-btn-show" : "")}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <header className={"main-header header-style-one" + (scrolled ? " fixed-header" : "")} id="top">
        <div className="outer-box">
          <div className="header-lower">
            <div className="inner-container">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo">
                    <a href="#top" className="wordmark-link" style={{ fontFamily: "var(--title-font-family, serif)", fontWeight: 700, fontSize: 22, color: "var(--theme-color1)" }}>
                      Jeane Matos<br />
                      <span style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--theme-color-dark)" }}>HOUSE CLEAN</span>
                    </a>
                  </div>
                </div>
                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <ul className="navigation">
                      <li><a href="#services">{t.nav[0]}</a></li>
                      <li><a href="#antes-depois">{t.nav[1]}</a></li>
                      <li><a href="#como-funciona">{t.nav[2]}</a></li>
                      <li><a href="#faq">{t.nav[3]}</a></li>
                      <li><a href="#contact">{t.nav[4]}</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="right-box">
                <a href={PHONE_HREF} className="header-phone_box">
                  <span className="icon"><img src="/cleanify/images/telephone1.png" alt="" /></span>
                  <span className="info">
                    <span className="text">{t.callLabel}</span>
                    <span className="number">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <div className="language-switch" style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 700, marginRight: 6 }}>
                  <button type="button" onClick={() => setLanguage("pt")} className={language === "pt" ? "is-active" : "is-inactive"} style={{ background: "none", border: 0, cursor: "pointer" }}>PT</button>
                  <span>/</span>
                  <button type="button" onClick={() => setLanguage("en")} className={language === "en" ? "is-active" : "is-inactive"} style={{ background: "none", border: 0, cursor: "pointer" }}>EN</button>
                </div>
                <a className="theme-btn btn-style-header" href="#contact">
                  <span className="btn-title">{t.navCta}</span>
                </a>
                <div className="mobile-nav-toggler" onClick={() => setMobileOpen(true)}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={() => setMobileOpen(false)} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo" style={{ fontWeight: 700, color: "var(--theme-color1)" }}>Jeane Matos House Clean</div>
              <div className="close-btn" onClick={() => setMobileOpen(false)}><i className="icon fa fa-times" /></div>
            </div>
            <ul className="navigation clearfix">
              <li onClick={() => setMobileOpen(false)}><a href="#services">{t.nav[0]}</a></li>
              <li onClick={() => setMobileOpen(false)}><a href="#antes-depois">{t.nav[1]}</a></li>
              <li onClick={() => setMobileOpen(false)}><a href="#como-funciona">{t.nav[2]}</a></li>
              <li onClick={() => setMobileOpen(false)}><a href="#faq">{t.nav[3]}</a></li>
              <li onClick={() => setMobileOpen(false)}><a href="#contact">{t.nav[4]}</a></li>
            </ul>
            <ul className="contact-list-one">
              <li>
                <i className="icon lnr-icon-envelope1" />
                <span className="title">{t.contact.emailLabel}</span>
                <div className="text"><a href={mailHref}>{EMAIL}</a></div>
              </li>
              <li>
                <i className="icon fa-solid fa-phone" />
                <span className="title">{t.contact.phoneLabel}</span>
                <div className="text"><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></div>
              </li>
            </ul>
          </nav>
        </div>

        <div className={"sticky-header" + (scrolled ? " fixed-header" : "")}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo" style={{ fontWeight: 700, color: "var(--theme-color1)" }}>Jeane Matos House Clean</div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="#services">{t.nav[0]}</a></li>
                      <li><a href="#antes-depois">{t.nav[1]}</a></li>
                      <li><a href="#como-funciona">{t.nav[2]}</a></li>
                      <li><a href="#faq">{t.nav[3]}</a></li>
                      <li><a href="#contact">{t.nav[4]}</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={() => setMobileOpen(true)}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner-section">
        <div className="bg-shape"><img src="/cleanify/images/banner-shape1.png" alt="" /></div>
        <div className="bg-shape2"><img src="/cleanify/images/banner-shape2.png" alt="" /></div>
        <div className="bg-shape3"><img src="/cleanify/images/banner-shape3.png" alt="" /></div>
        <div className="auto-container">
          <div className="content-box">
            <p className="eyebrow" style={{ color: "var(--theme-color1)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, marginBottom: 14 }}>{t.hero.eyebrow}</p>
            <h1 className="title">{t.hero.title1} <span>{t.hero.title2}</span></h1>
            <div className="bottom-box">
              <div className="text">{t.hero.text}</div>
              <a className="btn-style-three theme-btn" href="#contact">
                <span className="btn-main">{t.hero.cta}</span>
                <span className="btn-arrow-right"><i className="fa-light fa-arrow-right" /></span>
              </a>
            </div>
          </div>
          <div className="hero-thumb">
            <div className="image1"><img src="/work/project-09.jpeg" alt="Sala de estar limpa e organizada" style={{ borderRadius: 18 }} /></div>
            <div className="bubble-shape1"><img src="/cleanify/images/bubble1.png" alt="" /></div>
            <div className="bubble-shape2"><img src="/cleanify/images/bubble2.png" alt="" /></div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="auto-container">
          <div className="sec-title black">
            <div className="row align-items-end">
              <div className="col-xl-6">
                <div className="sub-title">{t.about.sub}</div>
                <h2 className="title">{t.about.title}</h2>
              </div>
              <div className="col-xl-6">
                <div className="text">{t.about.text}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="image-column">
                <div className="inner-column">
                  <div className="image"><img src="/generated/about-care-detail.jpg" alt="Mãos ajeitando almofadas com cuidado em uma sala aconchegante" /></div>
                  <div className="bottom-box">
                    <a className="btn-style-three theme-btn" href="#services">
                      <span className="btn-main">{t.about.cta}</span>
                      <span className="btn-arrow-right"><i className="fa-light fa-arrow-right" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="experience-column">
                <div className="inner-column">
                  <div className="value-card">
                    <h6>{t.about.care.title}</h6>
                    <p>{t.about.care.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section" id="services">
        <div className="outer-box">
          <div className="auto-container">
            <div className="row">
              <div className="col-xxl-5 col-xl-5">
                <div className="sec-title black mb-50">
                  <div className="sub-title">{t.services.sub}</div>
                  <h2 className="title">{t.services.title}</h2>
                  <div className="text">{t.services.text}</div>
                </div>
                <div className="features-box">
                  <div className="features-list-box">
                    <div className="row">
                      <div className="col-xl-6">
                        <ul className="features-list">
                          <li><div className="icon"><img src="/cleanify/images/check1.png" alt="" /></div>{t.services.features[0]}</li>
                          <li><div className="icon"><img src="/cleanify/images/check1.png" alt="" /></div>{t.services.features[1]}</li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul className="features-list">
                          <li><div className="icon"><img src="/cleanify/images/check1.png" alt="" /></div>{t.services.features[2]}</li>
                          <li><div className="icon"><img src="/cleanify/images/check1.png" alt="" /></div>{t.services.features[3]}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image1"><img src="/work/kitchen.jpg" alt="Cozinha limpa" /></div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 offset-xxl-1">
                <div>
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="icon"><img src="/cleanify/images/cleaner4.svg" alt="icon" /></div>
                      <h4 className="title"><a href="#contact">{t.services.items[0].title}</a></h4>
                      <div className="text">{t.services.items[0].text}</div>
                      <a href="#contact" className="theme-btn btn-style-two">{t.services.items[0].cta}</a>
                      <div className="image-box">
                        <div className="image"><img src="/work/project-07.jpeg" alt="" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="icon"><img src="/cleanify/images/cleaner5.svg" alt="icon" /></div>
                      <h4 className="title"><a href="#contact">{t.services.items[1].title}</a></h4>
                      <div className="text">{t.services.items[1].text}</div>
                      <a href="#contact" className="theme-btn btn-style-two">{t.services.items[1].cta}</a>
                      <div className="image-box">
                        <div className="image"><img src="/work/project-16.jpeg" alt="" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="service-block">
                    <div className="inner-block">
                      <div className="icon"><img src="/cleanify/images/cleaner1.svg" alt="icon" /></div>
                      <h4 className="title"><a href="#contact">{t.services.items[2].title}</a></h4>
                      <div className="text">{t.services.items[2].text}</div>
                      <a href="#contact" className="theme-btn btn-style-two">{t.services.items[2].cta}</a>
                      <div className="image-box">
                        <div className="image"><img src="/work/bedroom.jpg" alt="" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="outer-box">
          <div className="bg-shape bg"><img src="/cleanify/images/background-shape1.png" alt="" /></div>
          <div className="shape1"><img src="/cleanify/images/bubble1_1.png" alt="" /></div>
          <div className="shape2"><img src="/cleanify/images/bubble2_1.png" alt="" /></div>
          <div className="auto-container">
            <div className="row align-items-end">
              <div className="col-xl-6">
                <div className="sec-title mb-50">
                  <div className="sub-title">{t.why.sub}</div>
                  <h2 className="title">{t.why.title}</h2>
                </div>
                <div className="service-block-two">
                  <div className="inner-block">
                    {t.why.items.map((item) => (
                      <div className="service-box" key={item.title}>
                        <div className="inner-box">
                          <div className="icon"><img src="/cleanify/images/service2-1.svg" alt="" /></div>
                          <div className="content">
                            <h4 className="title"><a href="#contact">{item.title}</a></h4>
                            <div className="text">{item.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="image-column col-xl-6">
                <div className="inner-column">
                  <div className="image"><img src="/work/project-09.jpeg" alt="Sala limpa" /></div>
                  <div className="bottom-box">
                    <div className="text2">{t.why.caption}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-section" id="antes-depois">
        <div className="auto-container">
          <div className="sec-title text-center black mb-50">
            <div className="sub-title">{t.results.sub}</div>
            <h2 className="title">{t.results.title}</h2>
            <div className="text">{t.results.text}</div>
          </div>
          <div className="ba-grid">
            {t.results.pairs.map((pair) => (
              <div className="ba-card" key={pair.title}>
                <div className="ba-media">
                  <div className="ba-shot">
                    <span className="ba-tag antes">{language === "pt" ? "Antes" : "Before"}</span>
                    <img src={pair.before} alt={`${pair.title} - antes`} loading="lazy" />
                  </div>
                  <div className="ba-shot">
                    <span className="ba-tag depois">{language === "pt" ? "Depois" : "After"}</span>
                    <img src={pair.after} alt={`${pair.title} - depois`} loading="lazy" />
                  </div>
                </div>
                <div className="ba-caption">
                  <h4>{pair.title}</h4>
                  <p>{pair.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="como-funciona">
        <div className="inner-container">
          <div className="shape-one"><img src="/cleanify/images/shape5.png" alt="" /></div>
          <div className="shape-three"><img src="/cleanify/images/shape3.png" alt="" /></div>
          <div className="auto-container">
            <div className="sec-title text-center black">
              <div className="sub-title">{t.process.sub}</div>
              <h2 className="title">{t.process.title}</h2>
            </div>
            <div className="outer-box">
              <div className="row">
                {t.process.steps.map((step, index) => (
                  <div className="work-block col-lg-4 col-md-6" key={step.title}>
                    <div className={"inner-block" + (index === 2 ? " mb-0" : "")}>
                      <div className="icon">
                        <i className={index === 0 ? "fa-solid fa-calendar" : index === 1 ? "fa-solid fa-users" : "fa-solid fa-broom"} />
                      </div>
                      <h4 className="title">{step.title}</h4>
                      <div className="text">{step.text}</div>
                      <div className="step-count">{step.step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom-box">
              <div className="images">
                <img src="/work/bedroom.jpg" alt="" />
                <img src="/work/project-07.jpeg" alt="" />
                <img src="/work/project-10.jpeg" alt="" />
                <img src="/work/project-17.jpeg" alt="" />
              </div>
              <h5 className="mb-0">{t.process.bottomTitle}</h5>
              <a className="btn-style-three theme-btn" href="#services">
                <span className="btn-main">{t.process.bottomCta}</span>
                <span className="btn-arrow-right"><i className="fa-light fa-arrow-right" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee">
          <div className="marquee-group">
            {t.marquee.map((text) => <div className="text" key={text}>{text}</div>)}
          </div>
          <div className="marquee-group">
            {t.marquee.map((text) => <div className="text" key={text + "-2"}>{text}</div>)}
          </div>
        </div>
      </div>

      <section className="faqs-section pt-0" id="faq">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-5">
              <div className="inner-column">
                <div className="sec-title black mb-50">
                  <div className="sub-title">{t.faq.sub}</div>
                  <h2 className="title">{t.faq.title}</h2>
                </div>
                <div className="faqs-box">
                  <div className="inner-box">
                    <h3 className="title">{t.faq.cardTitle}</h3>
                    <a href="#contact" className="theme-btn btn-style-two">{t.faq.cardCta}</a>
                    <div className="image"><img src="/cleanify/images/faq1.png" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faqs-column col-xl-7">
              <div className="accordion-style-one">
                <ul className="accordion-box">
                  {t.faq.items.map((item, index) => (
                    <li className={"accordion block" + (openFaq === index ? " active-block" : "")} key={item.q}>
                      <div
                        className={"acc-btn" + (openFaq === index ? " active" : "")}
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      >
                        <span className="number" /> {item.q}
                        <div className="icon fa-solid fa-angle-right" />
                      </div>
                      <div className={"acc-content" + (openFaq === index ? " current" : "")}>
                        <div className="content">
                          <div className="text">{item.a}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-lg-8">
                <div className="inner-column">
                  <h2 className="title">{t.cta.title}</h2>
                  <a href="#contact" className="btn-style-three theme-btn">
                    <span className="btn-main">{t.cta.button}</span>
                    <span className="btn-arrow-right"><i className="fa-light fa-arrow-right" /></span>
                  </a>
                  <div className="shape-2"><img src="/cleanify/images/card1-3.png" alt="" /></div>
                </div>
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="shape-1"><img src="/cleanify/images/card1-4.png" alt="" /></div>
                  <div className="image"><img src="/cleanify/images/card1-1.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="inner-container">
          <div className="bg-shape bg"><img src="/cleanify/images/contact-bg1.png" alt="" /></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div className="col-xl-5">
                  <div className="contact-info-card">
                    <div>
                      <span className="row-label">{t.contact.phoneLabel}</span>
                      <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                    </div>
                    <div>
                      <span className="row-label">{t.contact.emailLabel}</span>
                      <a href={mailHref} style={{ fontSize: 17 }}>{EMAIL}</a>
                    </div>
                    <div>
                      <span className="row-label">{t.contact.areaLabel}</span>
                      <span className="row-value">{t.contact.area}</span>
                    </div>
                  </div>
                </div>
                <div className="form-column col-xl-7">
                  <div className="inner-column">
                    <div className="contact-form">
                      <div className="sec-title">
                        <div className="sub-title">{t.contact.sub}</div>
                        <h2 className="title">{t.contact.title}</h2>
                        <div className="text">{t.contact.text}</div>
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const form = e.currentTarget;
                          const type = (form.elements.namedItem("type") as HTMLSelectElement)?.value;
                          const supplies = (form.elements.namedItem("supplies") as HTMLSelectElement)?.value;
                          const body = language === "pt"
                            ? `Olá, Jeane! Gostaria de um orçamento.%0D%0A%0D%0ATipo de limpeza: ${type}%0D%0AProdutos de limpeza: ${supplies}%0D%0A%0D%0AMeu endereço / bairro:%0D%0AMelhor dia e horário:`
                            : `Hi Jeane, I'd like a quote.%0D%0A%0D%0AType of cleaning: ${type}%0D%0ACleaning supplies: ${supplies}%0D%0A%0D%0AMy address / area:%0D%0ABest day and time:`;
                          window.location.href = `${mailHref}&body=${body}`;
                        }}
                      >
                        <div className="row">
                          <div className="form-group col-lg-12">
                            <div className="frm-field">
                              <h6>{t.contact.typeLabel}</h6>
                              <select name="type" defaultValue={t.contact.types[0]}>
                                {t.contact.types.map((opt) => <option key={opt}>{opt}</option>)}
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-lg-12">
                            <div className="frm-field">
                              <h6>{t.contact.suppliesLabel}</h6>
                              <select name="supplies" defaultValue={t.contact.supplies[0]}>
                                {t.contact.supplies.map((opt) => <option key={opt}>{opt}</option>)}
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-lg-12 mb-0">
                            <div className="bottom-box" style={{ flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
                              <button className="btn-style-three theme-btn" type="submit">
                                <span className="btn-main">{t.contact.submit}</span>
                                <span className="btn-arrow-right"><i className="fa-light fa-arrow-right" /></span>
                              </button>
                              <div style={{ fontSize: 12, color: "rgba(255,255,255,.65)" }}>{t.contact.note}</div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer footer-style-one">
        <div className="shape-one"><img src="/cleanify/images/bubble4.png" alt="" /></div>
        <div className="marquee-section">
          <div className="marquee">
            <div className="marquee-group">
              {t.marquee.map((text) => <div className="text" key={"f-" + text}>{text}</div>)}
            </div>
            <div className="marquee-group">
              {t.marquee.map((text) => <div className="text" key={"f2-" + text}>{text}</div>)}
            </div>
          </div>
        </div>

        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-lg-3">
                <div className="footer-widget widget-contact">
                  <div className="logo" style={{ fontWeight: 700, color: "#fff", fontSize: 18 }}>{t.footer.companyTitle}</div>
                  <ul className="contact-info">
                    <li><a href={PHONE_HREF}><i className="fa-solid fa-phone" /> <span>{PHONE_DISPLAY}</span></a></li>
                    <li><a href={mailHref}><i className="fa-solid fa-envelope" /> <span>{EMAIL}</span></a></li>
                    <li><a href="#contact"><i className="fa-solid fa-location-dot" /><span>{t.contact.area}</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-lg-9">
                <div className="footer-outer">
                  <div className="footer-link-btn"><a href="#contact">{t.footer.consult} <i className="fa-solid fa-arrow-right" /></a></div>
                  <div className="row">
                    <div className="footer-column col-xl-3 col-lg-3 col-md-3 col-sm-6 offset-xl-1">
                      <div className="footer-widget links-widget">
                        <h5 className="widget-title">{t.footer.companyTitle}</h5>
                        <div className="widget-content">
                          <ul className="user-links">
                            {t.footer.company.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-xl-4 col-lg-4 col-md-4 col-sm-6">
                      <div className="footer-widget links-widget">
                        <h5 className="widget-title">{t.footer.servicesTitle}</h5>
                        <div className="widget-content">
                          <ul className="user-links">
                            {t.footer.services.map((s) => <li key={s}><a href="#services">{s}</a></li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-column col-xl-4 col-lg-5 col-md-5">
                      <div className="footer-widget date-widget">
                        <h5 className="widget-title">{t.footer.availabilityTitle}</h5>
                        <div className="widget-date">
                          <p style={{ color: "rgba(255,255,255,.65)" }}>{t.footer.availability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <p className="copyright-text">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
