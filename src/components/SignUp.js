// Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // Perform API call to store user information in the database
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Assuming the server sends back a JSON response with authentication status
        const data = await response.json();
  
        if (data.success) {
          console.log('Signup successful!');
          navigate('/');
          // Redirect to home page or perform other actions
        } else {
          console.error('Invalid credentials.');
          setError(data.message || 'Invalid details.');
        }
      } else {
        console.error('Invalid credentials.');
        const data = await response.json();
        setError(data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;