import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '551144194180';
const displayPhone = '(11) 4419-4180';

function ArrowUpRight({ size = 18 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17 17 7M8 7h9v9" /></svg>;
}
function WhatsAppIcon({ size = 22 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.3-3.7A8.2 8.2 0 1 1 20 11.5Z"/><path d="M8.2 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.6l-.5.6c.7 1.3 1.7 2.3 3 3l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-2.9-.8-5.2-3.1-6-6-.2-.5-.1-1.1.1-1.5Z"/></svg>
}
function InstagramIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>; }
function FacebookIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4.2c-.5-.1-1.8-.2-3.4-.2-3.3 0-5.5 2-5.5 5.7V13H4.5v4.2h3.6V24h4.4v-6.8h3.7l.6-4.2h-4.3V10c0-1.2.3-2 1.5-2Z"/></svg>; }
function MapIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>; }

function App() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.16 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Roma Proteções!%0A%0A*Solicitação de triagem técnica*%0A%0A*Nome:* ${data.get('name')}%0A*E-mail:* ${data.get('email')}%0A*Telefone/WhatsApp:* ${data.get('phone')}%0A*Necessidade:* ${data.get('need')}%0A*Descrição:* ${data.get('description')}`;
    setSent(true);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  }

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Roma Proteções — início">
        <img className="brand-image" src="/assets/brand-mark.jpg" alt="Logo Roma Tecnologia" /><span><strong>ROMA</strong><small>PROTEÇÕES INDUSTRIAIS</small></span>
      </a>
      <nav aria-label="Navegação principal"><a href="#solucoes">Soluções</a><a href="#triagem">Triagem técnica</a><a href="#contato">Contato</a></nav>
      <a className="header-cta" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Falar com especialista <ArrowUpRight size={16} /></a>
    </header>

    <main>
      <section id="inicio" className="hero-media">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/attendant.jpg"><source src="/assets/hero-treated.mp4" type="video/mp4" /></video>
        <div className="hero-shade" />
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>
      <section className="hero-copy section-navy">
        <div className="hero-content reveal from-left">
          <div className="eyebrow light"><span /> ENGENHARIA QUE PROTEGE PERFORMANCE</div>
          <h1>Proteções Industriais e Engenharia de Precisão <em>para o seu Maquinário</em></h1>
          <p className="hero-subtitle">Especialistas em proteções sanfonadas, telescópicas e adequação completa à norma NR12 com padrão industrial rigoroso.</p>
          <div className="hero-actions"><a className="button button-light" href="#triagem">Solicitar avaliação técnica <ArrowUpRight /></a><a className="text-link light-link" href="#solucoes">Conheça nossas soluções <span>↓</span></a></div>
          <div className="hero-proof"><span className="proof-line" /><span>Atendimento consultivo</span><span>·</span><span>Precisão industrial</span><span>·</span><span>NR12</span></div>
        </div>
      </section>

      <section id="solucoes" className="solutions section-white">
        <div className="section-kicker reveal from-right"><span>01</span><span className="line" /><span>SOLUÇÕES SOB MEDIDA</span></div>
        <div className="solutions-grid">
          <div className="section-intro reveal from-left"><h2>Proteção que acompanha o ritmo da sua <em>operação.</em></h2><p>Projetamos e fabricamos soluções que preservam o maquinário, elevam a segurança e ajudam a manter sua linha produtiva em movimento.</p><a className="outline-link" href="#triagem">Encontrar minha solução <ArrowUpRight /></a></div>
          <div className="solution-list reveal from-right">
            <article><span className="number">01</span><div><h3>Proteções sanfonadas</h3><p>Flexibilidade e vedação para guias, fusos e eixos em movimentos contínuos.</p></div><ArrowUpRight /></article>
            <article><span className="number">02</span><div><h3>Proteções telescópicas</h3><p>Construção robusta para ambientes de alta exigência e precisão dimensional.</p></div><ArrowUpRight /></article>
            <article><span className="number">03</span><div><h3>Adequação NR12</h3><p>Diagnóstico e engenharia aplicada para uma operação mais segura e em conformidade.</p></div><ArrowUpRight /></article>
          </div>
        </div>
      </section>

      <section id="triagem" className="intake section-navy">
        <div className="section-kicker light reveal from-left"><span>02</span><span className="line" /><span>TRIAGEM TÉCNICA & ORÇAMENTO</span></div>
        <div className="intake-grid">
          <div className="intake-copy reveal from-left"><h2>Vamos entender o seu <em>desafio.</em></h2><p>Conte um pouco sobre a sua operação. Nossa equipe técnica retorna com o direcionamento mais eficiente para o seu caso.</p><div className="contact-note"><span>Resposta ágil pelo WhatsApp</span><strong>{displayPhone}</strong></div></div>
          <form className="lead-form reveal from-right" onSubmit={handleSubmit}>
            <div className="form-row"><label>Nome completo<input required name="name" placeholder="Como podemos te chamar?" /></label><label>E-mail corporativo<input required type="email" name="email" placeholder="voce@empresa.com.br" /></label></div>
            <div className="form-row"><label>Telefone / WhatsApp<input required name="phone" placeholder="(00) 00000-0000" /></label><label>Necessidade<select required name="need" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Proteção sanfonada</option><option>Proteção telescópica</option><option>Adequação NR12</option><option>Outro projeto industrial</option></select></label></div>
            <label>Descreva brevemente o seu projeto<textarea required name="description" rows="4" placeholder="Fale sobre o equipamento, medidas ou desafio atual..." /></label>
            <button className="button button-form" type="submit">Enviar para a equipe técnica <ArrowUpRight /></button>
            {sent && <p className="form-success" role="status">Mensagem preparada. O WhatsApp foi aberto para concluir o contato.</p>}
            <p className="form-privacy">Seus dados são usados exclusivamente para o atendimento da sua solicitação.</p>
          </form>
        </div>
      </section>

      <section className="specialist section-white">
        <div className="specialist-grid"><div className="specialist-photo reveal from-left"><img src="/assets/attendant.jpg" alt="Atendente da Roma Proteções usando camisa azul-marinho e headset" /><span className="photo-tag">SUPORTE TÉCNICO CONSULTIVO</span></div><div className="specialist-copy reveal from-right"><div className="section-kicker"><span>03</span><span className="line" /><span>ATENDIMENTO ESPECIALIZADO</span></div><h2>Do primeiro contato à solução, <em>lado a lado.</em></h2><p>Você não precisa traduzir o seu problema sozinho. Nossa equipe combina escuta atenta, leitura técnica e experiência de chão de fábrica para indicar o caminho certo — sem excesso, sem improviso.</p><div className="specialist-points"><div><b>01</b><span>Diagnóstico consultivo</span></div><div><b>02</b><span>Engenharia aplicada</span></div><div><b>03</b><span>Acompanhamento próximo</span></div></div><a className="outline-link" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Conversar com a Roma <ArrowUpRight /></a></div></div>
      </section>

      <section className="closing-media"><video autoPlay muted loop playsInline poster="/assets/attendant.jpg"><source src="/assets/closing.mp4" type="video/mp4" /></video></section>
      <section className="closing-copy section-navy"><div className="closing-copy-inner reveal from-left"><div className="eyebrow light"><span /> ROMA PROTEÇÕES</div><h2>Precisão que protege o que<br /><em>faz sua indústria avançar.</em></h2><a className="button button-light" href="#triagem">Começar uma conversa <ArrowUpRight /></a></div></section>
    </main>

    <footer id="contato" className="site-footer"><div className="footer-top"><div className="footer-brand"><a className="brand brand-footer" href="#inicio"><img className="brand-image" src="/assets/brand-mark.jpg" alt="Logo Roma Tecnologia" /><span><strong>ROMA</strong><small>PROTEÇÕES INDUSTRIAIS</small></span></a><p>Engenharia de proteção para máquinas industriais com precisão, segurança e parceria de verdade.</p><div className="socials"><a className="social-facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a><a href="https://www.instagram.com/roma_tecnologia" target="_blank" rel="noreferrer" aria-label="Instagram Roma Tecnologia"><InstagramIcon /></a><a href="https://maps.google.com/?q=Terra+Preta,+Mairiporã+-+SP" target="_blank" rel="noreferrer" aria-label="Abrir localização no Google Maps"><MapIcon /></a></div></div><div className="footer-contact"><span className="footer-label">ONDE ESTAMOS</span><address>Terra Preta<br />Mairiporã — SP</address><span className="footer-label">FALE COM A ROMA</span><a href="mailto:vendas01@romaprotecoes.com.br">vendas01@romaprotecoes.com.br</a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">{displayPhone}</a></div><div className="map-wrap"><iframe title="Mapa da Roma Proteções em Terra Preta, Mairiporã" src="https://www.google.com/maps?q=Terra%20Preta%2C%20Mairipor%C3%A3%20-%20SP&output=embed" loading="lazy" /></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Roma Proteções Indústria e Comércio</span><span>Projetado para proteger performance.</span></div></footer>
    <a className="whatsapp-float" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label={`Falar com a Roma Proteções pelo WhatsApp ${displayPhone}`}><WhatsAppIcon size={27} /><span>Fale com a Roma</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
