// Profile.js

import React from 'react';
import MyEvents from './ProfileComponents/MyEvents';
import Interests from './ProfileComponents/Interests';
import AccountSettings from './ProfileComponents/AccountSettings';
import DeleteUser from './ProfileComponents/DeleteUser';

const Profile = () => {
  return (
    <div class="profile-container">
      <MyEvents />
      <Interests />
      <AccountSettings />
      <DeleteUser />
    </div>
  );
};

export default Profile;
