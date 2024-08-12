import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import '@fortawesome/fontawesome-free/css/all.min.css';

import { Home } from "./pages/home";
import { SignIn } from "./pages/SignIn";
import { UserPage } from "./pages/UserPage";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <Router>
      <div className='Projet11'>
        <Header className="header"/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;