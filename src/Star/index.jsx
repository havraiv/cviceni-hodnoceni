import React, { useState } from 'react';
import './style.css';

const Star = () => {
  const [glowing, setGlowing] = useState(false);

  const hvezdoSvit = () => {
    setGlowing(!glowing);
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div onClick={hvezdoSvit} className={starClass}></div>;
};

export default Star;
