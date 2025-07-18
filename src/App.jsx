import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './components/Aboutme';
import Hero from './components/Hero';
import Services from './components/Services';
import Project from './components/Project';
import Form from "./components/Form";
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Hero/>
      <Aboutme/>
      <Services/>
      <Project/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
