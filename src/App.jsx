import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Offerings from './components/Offerings';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <Offerings />
      <ContactFooter />
    </div>
  );
}

export default App;
