import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="p-6 text-gold bg-black min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to KGG</h1>
        <Link to="/about" className="underline">About</Link>
        <Routes>
          <Route path="/about" element={<div>About page coming soon...</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;