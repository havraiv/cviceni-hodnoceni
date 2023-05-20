import React, { useState } from 'react';
import './style.css';
// Do komponenty Star přidejte prop onGlow. Toto bude funkce, která se zavolá, když se hvězdička rozsvítí.
const Star = ({ onGlow }) => {
  const [glowing, setGlowing] = useState(false);

  const hvezdoSvit = () => {
    setGlowing(!glowing);
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div onClick={hvezdoSvit} className={starClass}></div>;
};

export default Star;
