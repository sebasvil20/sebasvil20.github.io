import React, {useState, useEffect} from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Works } from './components/Works'

function App() {
  const [color, saveColor] = useState("#ff5851")

  window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    console.log(y)
    saveColor( y > 13 ? "#6B0990": y> 9 ? "#EF3158" : y > 6 ? "#E86618" : "#ff5851")
  })

  return (
    <section className='main-container' style={{backgroundColor: color}}>
      <Menu />
      <Hero />
      <About />
      <Works />
      <Footer />
    </section>
  )
}

export default App
