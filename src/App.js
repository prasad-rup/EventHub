// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import EventRegistrationPage from './components/RegistrationPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <div className="header-content">
            <h1>EventHub</h1>
            <NavBar />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/registration/:eventId" element={<EventRegistrationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
