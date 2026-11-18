import { Brush, Sparkles, Sun } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Brush,
    title: 'Sneaker Cleaning',
    description: 'A freshen-up for your everyday pairs. We target dirt and marks to bring back a cleaner look.',
    tag: 'THE EVERYDAY RESET',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Sneaker Restoration',
    description: 'Extra attention for well-loved sneakers that need a little more care and detail.',
    tag: 'GIVE THEM NEW LIFE',
  },
  {
    number: '03',
    icon: Sun,
    title: 'Shoe Whitening',
    description: 'A brighter finish for suitable white soles and sneaker materials, handled with care.',
    tag: 'BRIGHTER BY CLEAR WHITE',
  },
]

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> WHAT WE DO</div>
            <h2>THE RIGHT CARE<br />FOR EVERY PAIR.</h2>
          </div>
          <p>Whether they need a quick clean or a serious refresh, we've got your sneakers covered.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description, tag }) => (
            <article className="service-card" key={number}>
              <div className="service-top"><span>{number}</span><Icon size={27} strokeWidth={1.5} /></div>
              <div>
                <div className="service-tag">{tag}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <a href="#booking" className="service-link">Book this service <span>↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}