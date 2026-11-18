import { ArrowUpRight, Footprints } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Footprints size={22} /></span><span>BEZUCAL <b>SNEAKER WASH</b></span></a>
        <p>GOOD SNEAKERS DESERVE<br />GREAT CARE.</p>
        <a href="#booking" className="footer-book">Book your collection <ArrowUpRight size={17} /></a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BEZUCAL Sneaker Wash. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}