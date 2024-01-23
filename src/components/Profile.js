// Profile.js

import React, { useEffect, useState } from 'react';
import MyEvents from './ProfileComponents/MyEvents';
import Interests from './ProfileComponents/Interests';
import AccountSettings from './ProfileComponents/AccountSettings';
import DeleteUser from './ProfileComponents/DeleteUser';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="user-info">
        <h2 className="welcome-text">Welcome, {user?.firstname}!</h2>
        <p className="email-text">Email: {user?.email}</p>
      </div>
      <MyEvents />
      <Interests />
      <AccountSettings />
      <DeleteUser />
    </div>
  );
};

export default Profile;
