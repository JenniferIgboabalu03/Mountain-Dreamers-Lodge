import React from 'react'
import { Navbar } from './components/navbar'
import { Home } from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Footer from './components/footer'
import Contact from './components/Contact'
import Family_cabin from './components/Booking pages/Family cabin'
import Rooms from './components/Rooms'
import Single_cabin from './components/Booking pages/Single cabin'
import Duo_cabin from './components/Booking pages/Duo cabin'
import Duplex_cabin from './components/Booking pages/Duplex cabin'
import Micro_cabin from './components/Booking pages/Micro cabin'
import Familyduo_cabin from './components/Booking pages/Family Duo cabin'
import Gallery from './components/gallery'


function App() {

  return (
    
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact'element={ <Contact /> } />          
          <Route path='/rooms' element={ <Rooms /> } />
          <Route path='/family_cabin' element={ <Family_cabin /> } />
          <Route path='/single_cabin' element={ <Single_cabin /> } />
          <Route path='/duo_cabin' element={ <Duo_cabin /> } />
          <Route path='/duplex_cabin' element={ <Duplex_cabin /> } />
          <Route path='/micro_cabin' element={ <Micro_cabin /> } />
          <Route path='/family duo_cabin' element={ <Familyduo_cabin /> } />
          <Route path="/gallery" element={ <Gallery /> }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
