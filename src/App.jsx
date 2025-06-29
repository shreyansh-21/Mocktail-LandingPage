import React from 'react'
import { gsap } from "gsap";
import{ ScrollTrigger, SplitText} from "gsap/all";
//Gsap plugins are not registered by default, so we need to register them manually
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center'>
      <h1 className='text-4xl text-yellow-500'>heyyyy</h1>
    </div>
  )
}

export default App
