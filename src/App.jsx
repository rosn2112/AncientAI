import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EventsRetreats from './pages/EventsRetreats';
import GetInvolved from './pages/GetInvolved';
import FAQs from './pages/FAQs';
import FreeResources from './pages/FreeResources';
import Shranyam from './pages/Shranyam';
import OurInspiration from './pages/OurInspiration';
import TheSangha from './pages/TheSangha';
import Outreach from './pages/Outreach';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg text-gray-200 font-sans selection:bg-vedic-orange selection:text-black">
      <div className="noise-bg"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsRetreats />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/resources" element={<FreeResources />} />
        <Route path="/shranyam" element={<Shranyam />} />
        <Route path="/inspiration" element={<OurInspiration />} />
        <Route path="/sangha" element={<TheSangha />} />
        <Route path="/outreach" element={<Outreach />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
