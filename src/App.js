// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Profile from './components/Profile';
import EntryPage from './components/EntryPage.js';
import Signup from './components/SignUp';
import Login from './components/Login'; // Import the new component
import NavBar from './components/NavBar';
import EventRegistrationPage from './components/RegistrationPage';
import { AuthProvider } from './Contexts/AuthContext'; // Assuming you have an AuthContext
import './App.css';
const App = () => {
  return (
    <AuthProvider>
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
              <Route path="/entry" element={<EntryPage />} />
              <Route path="/registration/:eventId" element={<EventRegistrationPage />} />

              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login />} />
               
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;
