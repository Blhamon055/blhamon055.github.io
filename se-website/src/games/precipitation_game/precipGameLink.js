import React from 'react';

const precipGameLink = () => {
  return (
    <a href={process.env.PUBLIC_URL + '/games/precipitation_game/index.html'} 
    target="_blank" 
    rel="noopener noreferrer"
    >
      Play Our Precipitation Game!
    </a>
  );
};

export default precipGameLink;
