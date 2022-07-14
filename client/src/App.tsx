import React from 'react';
import Authentication from './pages/Authentication/Authentication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authentication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
