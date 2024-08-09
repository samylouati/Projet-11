import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import { Home } from "./pages/home";
import { SignIn } from "./pages/SignIn";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="app">
      <Router>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </main>
          <Footer /> 
      </Router>
    </div>
  );
}

export default App;
