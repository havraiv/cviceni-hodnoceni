import React, { useState } from 'react';
import './style.css';

const Star = ({ glowing }) => {
  // const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';
  // const hvezdoSvit = () => {
  //   starClass !== 'rating__star rating__star--on' ? onGlow() : onDim();
  //   setGlowing(!glowing);
  // };
  return <div /*onClick={hvezdoSvit}*/ className={starClass}></div>;
};

export default Star;
