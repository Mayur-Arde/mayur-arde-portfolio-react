import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blogs/Blogs';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
        <Navbar />
      <main className='main'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/blogs" element={<Blog/>} />
        </Routes>
        <Contact />
      </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
