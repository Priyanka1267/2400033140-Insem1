import React from 'react';

/**
 * A simple profile card component.
 * @param {object} props - The component's props.
 * @param {string} props.name - The user's name.
 * @param {number} props.age - The user's age.
 * @param {string} props.bio - A short biography of the user.
 */
const UserCard = ({ name, age, bio }) => {
  // Define inline styles for the card layout
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const nameStyle = {
    fontSize: '1.5em',
    color: '#333',
    marginBottom: '5px',
  };

  const ageStyle = {
    fontSize: '1em',
    color: '#666',
    marginBottom: '10px',
  };

  const bioStyle = {
    fontSize: '0.9em',
    color: '#444',
    lineHeight: '1.4',
    borderTop: '1px dashed #eee',
    paddingTop: '10px',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>**Age:** {age}</p>
      <p style={bioStyle}>**Bio:** {bio}</p>
    </div>
  );
};

export default UserCard;