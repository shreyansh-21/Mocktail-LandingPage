import React from 'react'
import { gsap } from "gsap";
import{ ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Menu from './components/Menu';
//Gsap plugins are not registered by default, so we need to register them manually
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Menu/>
    </main>
  )
}

export default App
