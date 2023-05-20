import React, { useState } from 'react';
import Star from '../Star';
import './style.css';

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
        <Star glowing={value >= 1 ? true : false} />
        <Star glowing={value >= 2 ? true : false} />
        <Star glowing={value >= 3 ? true : false} />
        <Star glowing={value >= 4 ? true : false} />
        <Star glowing={value >= 5 ? true : false} />
      </div>
    </div>
  );
};

export default Rating;
