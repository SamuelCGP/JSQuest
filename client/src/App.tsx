import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import ResetPassword from './pages/ResetPassword/ResetPasssword';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Message message={"404"} />} />
          <Route path="/" element={<Authentication />} />
          <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;