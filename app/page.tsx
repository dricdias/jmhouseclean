"use client";

import { useState } from "react";

type Copy = {
  nav: string[]; eyebrow: string; title: string; intro: string; primary: string; secondary: string;
  proofKicker: string; proofTitle: string; proofBody: string; serviceKicker: string; serviceTitle: string;
  services: { name: string; body: string }[]; processKicker: string; processTitle: string;
  steps: { title: string; body: string }[]; galleryKicker: string; galleryTitle: string; galleryBody: string;
  contactKicker: string; contactTitle: string; contactBody: string; contactButton: string; footer: string;
};

const copy: Record<"en" | "pt", Copy> = {
  en: {
    nav: ["Services", "Our work", "About", "Contact"], eyebrow: "House care, made personal", title: "A cleaner home. A lighter everyday.",
    intro: "Thoughtful residential cleaning for spaces that deserve to feel as good as they look.", primary: "Request a cleaning", secondary: "See our work",
    proofKicker: "The feeling after", proofTitle: "Room to breathe.", proofBody: "Jeane Matos House Clean brings a calm, careful finish to the rooms you live in most — from the first reset to the final detail.",
    serviceKicker: "What we care for", serviceTitle: "A considered clean, from surface to sanctuary.", services: [
      { name: "Home refresh", body: "A complete reset for the rooms that carry your everyday." },
      { name: "Kitchen & bath", body: "The high-touch details, finished with patience and precision." },
      { name: "Move-in care", body: "A fresh beginning for a new home, with every corner ready." },
    ], processKicker: "A simple rhythm", processTitle: "Care you can feel in three steps.", steps: [
      { title: "Tell us what you need", body: "Call or email Jeane and share a little about your home." },
      { title: "We make a plan", body: "Your cleaning is shaped around your space and your priorities." },
      { title: "Come home lighter", body: "A considered finish, ready for real life to begin again." },
    ], galleryKicker: "Recent work", galleryTitle: "Proof lives in the details.", galleryBody: "A selection of homes cared for by Jeane Matos House Clean.",
    contactKicker: "Ready when you are", contactTitle: "Let’s make your home feel renewed.", contactBody: "Reach out for a thoughtful conversation about your cleaning needs.", contactButton: "Start a conversation", footer: "Residential cleaning with a personal touch.",
  },
  pt: {
    nav: ["Serviços", "Trabalhos", "Sobre", "Contato"], eyebrow: "Cuidado com a casa, de forma pessoal", title: "Uma casa renovada. Um dia a dia mais leve.",
    intro: "Limpeza residencial cuidadosa para espaços que merecem ser tão bons de sentir quanto são de ver.", primary: "Solicitar limpeza", secondary: "Ver trabalhos",
    proofKicker: "A sensação depois", proofTitle: "Espaço para respirar.", proofBody: "A Jeane Matos House Clean entrega um acabamento calmo e cuidadoso aos ambientes onde a vida acontece — do primeiro cuidado ao último detalhe.",
    serviceKicker: "O que cuidamos", serviceTitle: "Uma limpeza pensada, da superfície ao refúgio.", services: [
      { name: "Renovação da casa", body: "Um reset completo para os ambientes que fazem parte do seu dia." },
      { name: "Cozinha e banheiro", body: "Os detalhes de maior uso, finalizados com paciência e precisão." },
      { name: "Cuidado de mudança", body: "Um novo começo para uma nova casa, com cada canto preparado." },
    ], processKicker: "Um ritmo simples", processTitle: "Cuidado que você sente em três passos.", steps: [
      { title: "Conte o que você precisa", body: "Ligue ou envie um e-mail para a Jeane e fale um pouco sobre sua casa." },
      { title: "Criamos um plano", body: "A limpeza é pensada para o seu espaço e suas prioridades." },
      { title: "Volte para casa mais leve", body: "Um acabamento cuidadoso, pronto para a vida recomeçar." },
    ], galleryKicker: "Trabalhos realizados", galleryTitle: "A prova mora nos detalhes.", galleryBody: "Uma seleção de casas cuidadas pela Jeane Matos House Clean.",
    contactKicker: "Quando você estiver pronto", contactTitle: "Vamos renovar a sensação da sua casa.", contactBody: "Entre em contato para uma conversa cuidadosa sobre o que você precisa.", contactButton: "Começar uma conversa", footer: "Limpeza residencial com um toque pessoal.",
  },
};

const workImages = [
  ["/work/bedroom.jpg", "Freshly made bedroom / Quarto renovado"], ["/work/kitchen.jpg", "Open kitchen and living space / Cozinha e sala integradas"],
  ["/work/project-01.jpeg", "Completed home detail / Detalhe de casa finalizada"], ["/work/project-04.jpeg", "Clean living space / Sala limpa"],
  ["/work/project-08.jpeg", "Kitchen detail / Detalhe da cozinha"], ["/work/project-14.jpeg", "Home care detail / Detalhe de cuidado"],
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "pt">("en"); const t = copy[language];
  return <main>
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Jeane Matos House Clean home"><span>Jeane Matos</span><small>House Clean</small></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">{t.nav[0]}</a><a href="#work">{t.nav[1]}</a><a href="#about">{t.nav[2]}</a><a href="#contact">{t.nav[3]}</a></nav>
      <div className="header-actions"><div className="language-switch" aria-label="Language selector"><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")}>PT</button></div><a className="header-call" href="tel:+14758006931">(475) 800-6931 <span>↗</span></a></div>
    </header>
    <section className="hero" id="top"><div className="hero-shell"><div className="hero-copy reveal"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-lime" href="#contact">{t.primary} <span>↗</span></a><a className="text-link" href="#work">{t.secondary} <span>→</span></a></div><div className="hero-note"><span className="dot" /> Jeane Matos House Clean <span className="note-divider" /> Fairfield County, CT</div></div></div><div className="hero-services reveal reveal-delay">{t.services.map((service, index) => <article className="hero-service" key={service.name}><span className="hero-service-number">0{index + 1}</span><h3>{service.name}</h3><p>{service.body}</p><a href="#contact" aria-label={`Learn more about ${service.name}`}>↗</a></article>)}</div></section>
    <section className="proof-section section-grid" id="about"><div className="proof-visual reveal"><img src="/generated/care-detail.png" alt="A hand carefully polishing a bathroom faucet" /><div className="floating-caption">The last 10%<br /><span>is where care lives.</span></div></div><div className="proof-copy reveal reveal-delay"><p className="eyebrow">{t.proofKicker}</p><h2>{t.proofTitle}</h2><p>{t.proofBody}</p><div className="signature"><span>JM</span><div><strong>Jeane Matos</strong><small>House Clean</small></div></div></div></section>
    <section className="services-section" id="services"><div className="section-intro reveal"><p className="eyebrow">{t.serviceKicker}</p><h2>{t.serviceTitle}</h2></div><div className="service-list">{t.services.map((service, index) => <article className="service-row reveal" key={service.name}><span className="service-number">0{index + 1}</span><h3>{service.name}</h3><p>{service.body}</p><a href="#contact" aria-label={`Learn more about ${service.name}`}>↗</a></article>)}</div></section>
    <section className="process-section"><div className="section-intro reveal"><p className="eyebrow">{t.processKicker}</p><h2>{t.processTitle}</h2></div><div className="process-grid">{t.steps.map((step, index) => <article className="process-step reveal" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></section>
    <section className="work-section" id="work"><div className="work-heading reveal"><div><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div><p>{t.galleryBody}</p></div><div className="work-grid">{workImages.map(([src, alt], index) => <figure className={`work-image work-${index + 1} reveal`} key={src}><img src={src} alt={alt} loading="lazy" /><figcaption>{index % 2 === 0 ? "Bedroom & rest" : "Living & kitchen"}<span>↗</span></figcaption></figure>)}</div></section>
    <section className="contact-section" id="contact"><div className="contact-copy reveal"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><a className="button button-lime" href="mailto:jeane555rocha@gmail.com">{t.contactButton} <span>↗</span></a></div><div className="contact-details reveal reveal-delay"><a href="tel:+14758006931"><small>Phone / Telefone</small><strong>(475) 800-6931</strong></a><a href="mailto:jeane555rocha@gmail.com"><small>Email / E-mail</small><strong>jeane555rocha@gmail.com</strong></a></div></section>
    <footer><a className="wordmark" href="#top"><span>Jeane Matos</span><small>House Clean</small></a><p>{t.footer}</p><span>© 2026</span></footer>
  </main>;
}
