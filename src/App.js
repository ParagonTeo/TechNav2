import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frame1 from './comp/home'; // The component where buttons are located
import Map from './comp/map'; // Your Map Page component
import Frame2 from './comp/chatbot'; // Your AI Chatbot Page component
import Frame3 from './comp/bus.'; // Your Bus Schedules Page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame1 />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ai-chatbot" element={<Frame2 />} />
        <Route path="/bus-schedules" element={<Frame3 />} />
      </Routes>
    </Router>
  );
}

export default App;

