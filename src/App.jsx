import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Doe from './components/Doe'
import Work from './components/Work'
import Work2 from './components/Work2'
import Inpus from './components/Inpus'
import Future from './components/Future'
import Footer from './components/Footer'


import "bootstrap-icons/font/bootstrap-icons.css"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doe />
        <Work />
        <Work2 />
        <Inpus />
        <Future />
      </main>
      <Footer />
    </>
  )
}

export default App