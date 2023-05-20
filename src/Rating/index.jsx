import React, { useState } from 'react';
import Star from '../Star';
import './style.css';
// K tomu budeme na straně komponenty Rating potřebovat funkci handleDim. Postup je analogický jako v případě rozsvěcení, jistě jej zvládnete bez dalších instrukcí.
const Rating = () => {
  const [value, setValue] = useState(0);
  const handleGlow = () => {
    setValue(value + 1);
  };
  const handleDim = () => {
    setValue(value - 1);
  };
  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star onGlow={handleGlow} onDim={handleDim} glowing={true} />
        <Star onGlow={handleGlow} onDim={handleDim} glowing={false} />
        <Star onGlow={handleGlow} onDim={handleDim} glowing={true} />
        <Star onGlow={handleGlow} onDim={handleDim} glowing={false} />
        <Star onGlow={handleGlow} onDim={handleDim} glowing={true} />
      </div>
    </div>
  );
};

export default Rating;
