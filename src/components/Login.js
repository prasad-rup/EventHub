import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      // Perform API call to check user credentials
      const response = await fetch('http://localhost:6001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

     // Handle response as needed
    if (response.ok) {
      // Assuming the server sends back a JSON response with authentication status
      const data = await response.json();

      if (data.success) {
        console.log('Login successful!');
        // login();
        localStorage.setItem("user",JSON.stringify(data.user));
        console.log(data);
        navigate('/');
        // Redirect to home page or perform other actions
      } else {
        console.error('Invalid credentials.');
        setError(data.message || 'Invalid email or password.');
      }
    } else {
      console.error('Invalid credentials.');
      const data = await response.json();
      setError(data.message || 'Invalid credentials.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    setError('An error occurred during login.');
  }
};


  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
