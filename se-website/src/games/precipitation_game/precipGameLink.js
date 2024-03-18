import React from 'react';

const PrecipGameLink = () => {
  return (
    <a href={process.env.PUBLIC_URL + '/games/precipitation_game/Precipitation Minigame.html'} 
    target="_blank" 
    rel="noopener noreferrer"
    >
      Play My Godot Game
    </a>
  );
};

export default PrecipGameLink;
