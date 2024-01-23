import React, { useState, useEffect } from 'react';
import './Interests.css';

const Interests = () => {
  const allInterests = [
    'Business',
    'Health',
    'Home&Lifestyle',
    'Travel&Outdoor',
    'Music',
    'Film&Media',
    'Science&Tech',
    'Food&Drink',
    'Spirituality',
    'Sports&Fitness',
    'Fashion'
  ];

  const [selectedInterest, setSelectedInterest] = useState('');
  const [userInterestsList, setUserInterestsList] = useState([]);

  useEffect(() => {
    const fetchUserInterests = async () => {
      try {
        const response = await fetch('http://localhost:6001/api/users/1/interests');
        const data = await response.json();
        setUserInterestsList(data.userInterests || []);
      } catch (error) {
        console.error('Error fetching user interests:', error);
      }
    };

    fetchUserInterests();
  }, []);

  const handleRemoveInterest = async (interestToRemove) => {
    try {
      await fetch(`http://localhost:6001/api/users/1/remove-interest/${interestToRemove}`, {
        method: 'PUT',
      });

      const updatedInterests = userInterestsList.filter((interest) => interest !== interestToRemove);
      setUserInterestsList(updatedInterests);
    } catch (error) {
      console.error('Error removing interest:', error);
    }
  };

  const handleAddInterest = async () => {
    if (selectedInterest && !userInterestsList.includes(selectedInterest)) {
      try {
        await fetch(`http://localhost:6001/api/users/1/interests`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interest: selectedInterest,
          }),
        });

        setUserInterestsList((prevInterests) => [...prevInterests, selectedInterest]);
        setSelectedInterest('');
      } catch (error) {
        console.error('Error adding interest:', error);
      }
    }
  };

  return (
    <div className="interests-container">
      <h2>Interests</h2>
      <div className="user-interests">
        {userInterestsList.map((interest) => (
          <div key={interest} className="interest">
            <span>{interest}</span>
            <button onClick={() => handleRemoveInterest(interest)} className="remove-button">
              X
            </button>
          </div>
        ))}
      </div>
      <div className="add-interest-container">
        <select value={selectedInterest} onChange={(e) => setSelectedInterest(e.target.value)}>
          <option value="" disabled>
            Select Interest
          </option>
          {allInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
        <button onClick={handleAddInterest} className="add-button">
          Add Interest
        </button>
      </div>
    </div>
  );
};

export default Interests;
