import React, { useState } from 'react';
import './style.css';
// Nyní budeme chtít od hodnocení odečíst jedničku, když se hvězdička zhasne. Komponenta Star tedy bude mít druhou prop s názvem onDim, která se zavolá při zhasnutí hvězdičky.
const Star = ({ onGlow, onDim }) => {
  const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';
  const hvezdoSvit = () => {
    starClass !== 'rating__star rating__star--on' ? onGlow() : onDim();
    setGlowing(!glowing);
  };
  return <div onClick={hvezdoSvit} className={starClass}></div>;
};

export default Star;
