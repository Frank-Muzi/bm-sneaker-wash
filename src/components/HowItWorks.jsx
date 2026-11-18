import { CalendarDays, MessageCircle, Truck } from 'lucide-react'

const steps = [
  { icon: MessageCircle, title: 'Send your booking', text: 'Complete the booking form and send your details to the WhatsApp contact for your region.' },
  { icon: CalendarDays, title: 'Confirm your date', text: 'We’ll get in touch to confirm your preferred collection date and the service required.' },
  { icon: Truck, title: 'We collect & care', text: 'We arrange collection, give your sneakers the care they need, and coordinate delivery.' },
]

export default function HowItWorks() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <div className="eyebrow"><span /> SIMPLE FROM START TO FINISH</div>
        <div className="process-heading">
          <h2>THREE STEPS.<br /><span>FRESH KICKS.</span></h2>
          <p>Getting your sneakers cleaned should be easy. We make the process simple with collection and delivery.</p>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="step-card" key={title}>
              <div className="step-number">0{index + 1}</div>
              <div className="step-icon"><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}