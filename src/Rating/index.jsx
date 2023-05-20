import React, { useState } from 'react';
import Star from '../Star';
import './style.css';
// Nyní upravte funkci handleGlow tak, aby ke stavu value přičetla jedničku. Pokochejte se, jak to všechno krásně funguje.
const Rating = () => {
  const [value, setValue] = useState(0);
  const handleGlow = () => {
    setValue(value + 1);
    console.log('lalala');
  };
  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star onGlow={handleGlow} />
        <Star onGlow={handleGlow} />
        <Star onGlow={handleGlow} />
        <Star onGlow={handleGlow} />
        <Star onGlow={handleGlow} />
      </div>
    </div>
  );
};

export default Rating;
