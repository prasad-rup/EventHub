import React, { useEffect, useState } from 'react';
import './Explore.css';
const Explore = () => {
  const [usersWithSimilarInterests, setUsersWithSimilarInterests] = useState([]);

  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  const loggedInUserId = user ? user.userid : null;
  
  useEffect(() => {
    const fetchUsersWithSimilarInterests = async () => {
      try {
        // Fetch users who have at least one similar interest
        // console.log(loggedInUserId);
        const similarInterestsResponse = await fetch(`http://localhost:6001/api/explore?userId=${loggedInUserId}`);
        if (!similarInterestsResponse.ok) {
          throw new Error(`HTTP error! Status: ${similarInterestsResponse.status}`);
        }
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