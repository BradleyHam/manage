import React from 'react';
import Header from './Header/Header'
import Hero from './Hero/Hero'
import WhatsDifferent from './WhatsDifferent/WhatsDifferent'
import Testimonials from './Testimonials/Testimonials'
import Simplify from './Simplify/Simplify'
import Footer from './Footer/Footer'

import { useInView } from 'react-intersection-observer'


function App() {

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  })
  console.log(entry)


  return (
    <div className="App">
      <Header intersecting={inView} />
      <Hero />
      <WhatsDifferent ref={ref} />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
