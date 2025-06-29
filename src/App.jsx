import React from 'react'
import{ ScrollTrigger, SplitText} from "gsap/all";
//Gsap plugins are not registered by default, so we need to register them manually
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
