import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import ContactForm from './components/Contact/ContactForm'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <About />
    <ContactForm />
    <Projects />
    <Footer />
    </div>
  )
  
  
}

export default App
