import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

import { Home } from "./pages/home";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

function App() {

  return (
    <Router>
      <div className='Projet11'>
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
            
          </Routes>
        </main>
        <Footer /> 
      </div>
  </Router>
  )
}

export default App