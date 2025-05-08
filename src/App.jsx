import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import ContactForm from './pages/Contact/ContactForm'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'




function App() {

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App
