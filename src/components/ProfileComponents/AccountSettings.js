// AccountSettings.js
import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Add your logic to handle password change
    console.log('Changing password:', currentPassword, newPassword);
    // You may want to make an API call to update the password
    // Reset the input fields after updating the password
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <div className="change-password-section">
        <h3>Change Password</h3>
        <div className="password-fields">
          <label htmlFor="current-password">Current Password:</label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button onClick={handleChangePassword} className="change-password-button">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
