import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Fifty from './Components/Fifty'
import Why from './Components/Why1'
import Make2 from './Components/Make2'
import Bank3 from './Components/Bank3'
import Comments from './Components/Comments'
import Footer from './Components/Footer'
import Subscription from './Components/Subscription.Jsx'

function App() {

  return (
    <>
      <div className="scroll-smooth">
        <Hero/>
      <Fifty/>
      <Why/>
      <Make2/>
      <Bank3/>
      <Comments/>
      <section id="subscription">
  <Subscription />
</section>
      <Footer/>
      </div>

    </>
  )
}

export default App
