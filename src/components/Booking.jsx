import { useMemo, useState } from 'react'
import { ArrowUpRight, CalendarDays, MapPin, MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBERS } from '../config.js'

function getToday() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    region: 'mpumalanga',
    area: '',
    sneakers: '',
    date: '',
  })
  const [error, setError] = useState('')

  const regionLabel = useMemo(
    () => form.region === 'mpumalanga' ? 'Mpumalanga (Nelspruit)' : 'Gauteng (Johannesburg)',
    [form.region],
  )

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submit(event) {
    event.preventDefault()
    setError('')

    const phone = WHATSAPP_NUMBERS[form.region]
    if (!form.name.trim() || !form.area.trim() || !form.sneakers.trim() || !form.date) {
      setError('Please complete all fields before submitting.')
      return
    }

    const message = [
      'Hello BEZUCAL Sneaker Wash! I would like to book a sneaker collection.',
      '',
      `Name: ${form.name.trim()}`,
      `Region: ${regionLabel}`,
      `Area / Location: ${form.area.trim()}`,
      `Sneakers to wash: ${form.sneakers.trim()}`,
      `Preferred collection date: ${form.date}`,
      '',
      'Please contact me to confirm availability and collection details.',
    ].join('\n')

    // Opens WhatsApp with the message pre-filled. Customer must press Send.
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section booking-section" id="booking">
      <div className="container booking-layout">
        <div className="booking-intro">
          <div className="eyebrow"><span /> READY FOR A REFRESH?</div>
          <h2>LET'S GET<br /><span>THEM FRESH.</span></h2>
          <p>Tell us a little about your sneakers and where you’re based. We’ll connect you with the right collection team.</p>
          <div className="booking-contact">
            <div className="contact-icon"><MessageCircle size={20} /></div>
            <div><strong>BOOKING MADE SIMPLE</strong><span>Your region selects the correct WhatsApp contact.</span></div>
          </div>
          <div className="region-mini">
            <span><MapPin size={15} /> MPUMALANGA · NELSPRUIT</span>
            <span><MapPin size={15} /> GAUTENG · JOHANNESBURG</span>
          </div>
        </div>

        <form className="booking-form" onSubmit={submit}>
          <div className="form-heading">
            <div><span>BEZUCAL SNEAKER WASH</span><h3>Book a collection</h3></div>
            <CalendarDays size={25} />
          </div>

          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={update} placeholder="Enter your full name" autoComplete="name" required />

          <label htmlFor="region">Where do you reside?</label>
          <select id="region" name="region" value={form.region} onChange={update}>
            <option value="mpumalanga">Mpumalanga (Nelspruit)</option>
            <option value="gauteng">Gauteng (Johannesburg)</option>
          </select>

          <label htmlFor="area">Area / suburb</label>
          <input id="area" name="area" value={form.area} onChange={update} placeholder="e.g. Kabokweni, Sandton, Soweto" required />

          <label htmlFor="sneakers">Sneakers to wash</label>
          <textarea id="sneakers" name="sneakers" value={form.sneakers} onChange={update} placeholder="Tell us the sneaker brand, colour and number of pairs..." rows="3" required />

          <label htmlFor="date">Preferred collection date</label>
          <input id="date" type="date" name="date" min={getToday()} value={form.date} onChange={update} required />

          <div className="selected-region"><MapPin size={16} /><span>Booking will be directed to <strong>{regionLabel}</strong></span></div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-dark submit-button" type="submit">Continue to WhatsApp <ArrowUpRight size={18} /></button>
          <p className="form-disclaimer">Your WhatsApp app will open with your booking details. Please press Send to submit your request. Collection dates are subject to confirmation.</p>
        </form>
      </div>
    </section>
  )
}