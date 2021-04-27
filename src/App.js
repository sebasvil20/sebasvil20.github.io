import React from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Works } from './components/Works'

function App() {
  return (
    <section className='main-container'>
      <Menu />
      <Hero />
      <About />
      <Works />
      <Footer />
    </section>
  )
}

export default App
