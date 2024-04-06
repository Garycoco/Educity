import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import About from './components/about/About';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subtitle="our programs" />
        <Programs />
        <About />
      </div>

    </div>
  )
}

export default App
