// DeleteUser.js
import React from 'react';
import './DeleteUser.css';

const DeleteUser = ({ onDeleteUser }) => {
  const handleDeleteUser = () => {
    // Add your logic to handle user deletion
    // You may want to make an API call to delete the user
    onDeleteUser();
  };

  return (
    <div className="delete-user-container">
      <h2>Delete User</h2>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <button onClick={handleDeleteUser} className="delete-user-button">
        Delete Account
      </button>
    </div>
  );
};

export default DeleteUser;
