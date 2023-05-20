import React, { useState } from 'react';
import './style.css';
// Upravte komponentu Star tak, aby místo stavu glowing používala prop jménem glowing. Zatím zakomentujte funkci pro onClick, která nám v tuto chvíli přestane fungovat. Vyzkoušejte si však, že můžete jednotlivé hvězdičky rozsvítit nastavením prop glowing v kódu komponenty Rating.
const Star = ({ onGlow, onDim, glowing }) => {
  // const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';
  // const hvezdoSvit = () => {
  //   starClass !== 'rating__star rating__star--on' ? onGlow() : onDim();
  //   setGlowing(!glowing);
  // };
  return <div /*onClick={hvezdoSvit}*/ className={starClass}></div>;
};

export default Star;
