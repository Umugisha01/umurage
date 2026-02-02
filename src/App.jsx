import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EventDetails />
        <Location />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
