import React, { useEffect, useState } from 'react';
import './Explore.css';
const Explore = () => {
  const [usersWithSimilarInterests, setUsersWithSimilarInterests] = useState([]);
  const loggedInUserId = 4; // Replace with the actual logged-in user ID
  useEffect(() => {
    const fetchUsersWithSimilarInterests = async () => {
      try {
        // Fetch users who have at least one similar interest
        const similarInterestsResponse = await fetch(`http://localhost:3000/api/explore?userId=${loggedInUserId}`);
        if (!similarInterestsResponse.ok) {
          throw new Error(`HTTP error! Status: ${similarInterestsResponse.status}`);
        }
        const usersWithSimilarInterests = await similarInterestsResponse.json();
        setUsersWithSimilarInterests(usersWithSimilarInterests);
      } catch (error) {
        console.error('Error fetching users with similar interests:', error);
        // Handle the error, e.g., set an error state
      }
    };
    fetchUsersWithSimilarInterests();
  }, [loggedInUserId]);
  return (
    <div className="explore-container">
      <h2>Explore Users with Similar Interests</h2>
      {Array.isArray(usersWithSimilarInterests) && usersWithSimilarInterests.map((user) => (
        <div key={user.userid} className="user-card">
          <h3>{`${user.firstname} ${user.lastname}`}</h3>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Explore;