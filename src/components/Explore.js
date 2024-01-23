// explore.js 

import React, { useEffect, useState } from 'react';
import './Explore.css';
const Explore = () => {
  const [usersWithSimilarInterests, setUsersWithSimilarInterests] = useState([]);
  const loggedInUserId = 1; // Replace with the actual logged-in user ID
  useEffect(() => {
    const fetchUsersWithSimilarInterests = async () => {
      try {
        // Fetch the interests of the logged-in user
        const interestsResponse = await fetch(`http://localhost:6001/api/users/${loggedInUserId}/interests`);
        const userInterests = await interestsResponse.json();
        // Fetch users who have at least one similar interest
        const similarInterestsResponse = await fetch(`http://localhost:6001/api/explore`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: loggedInUserId,
            interests: userInterests.map((interest) => interest.interestid),
          }),
        });
        const usersWithSimilarInterests = await similarInterestsResponse.json();
        setUsersWithSimilarInterests(usersWithSimilarInterests);
      } catch (error) {
        console.error('Error fetching users with similar interests:', error);
      }
    };
    fetchUsersWithSimilarInterests();
  }, [loggedInUserId]);
  return (
    <div className="explore-container">
      <h2>Explore Users with Similar Interests</h2>
      {usersWithSimilarInterests.map((user) => (
        <div key={user.userid} className="user-card">
          <h3>{`${user.firstname} ${user.lastname}`}</h3>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Explore;