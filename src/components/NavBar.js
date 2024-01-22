// // NavBar.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/explore">Explore</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// NavBar.js
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'; // Assume you have an AuthContext
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth(); // Adjust based on your AuthContext
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <ul>
        {!user && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;