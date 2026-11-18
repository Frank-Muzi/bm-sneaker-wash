import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import heroImage from '../Images/image.png'

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="eyebrow"><span /> SNEAKER CARE, DONE RIGHT</div>
        <h1>BRING YOUR<br /><span>SNEAKERS</span><br />BACK TO LIFE.</h1>
        <p className="hero-copy">From everyday dirt to deep restoration, give your favourite pair the care they deserve.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#booking">Book a collection <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#services">Explore services <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><Sparkles size={16} /> CLEAN. RESTORE. REPEAT.</div>
      </div>
      <div className="hero-index">01 / SNEAKER CARE</div>
    </section>
  )
}