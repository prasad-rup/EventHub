// Interests.js
import React, { useState } from 'react';
import './Interests.css';

const Interests = () => {
  // Sample interest data (replace this with actual data from your API)
  const userInterests = ['Music', 'Sports', 'Art'];

  const [selectedInterest, setSelectedInterest] = useState('');
  const [userInterestsList, setUserInterestsList] = useState(userInterests);

  const handleRemoveInterest = (interestToRemove) => {
    const updatedInterests = userInterestsList.filter((interest) => interest !== interestToRemove);
    setUserInterestsList(updatedInterests);
  };

  const handleAddInterest = () => {
    if (selectedInterest && !userInterestsList.includes(selectedInterest)) {
      setUserInterestsList((prevInterests) => [...prevInterests, selectedInterest]);
      setSelectedInterest('');
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
          {/* Add interest options dynamically */}
          {userInterests.map((interest) => (
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
