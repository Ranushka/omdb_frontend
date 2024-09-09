'use client';

import React, { useState } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
}

/* __DOC
Raange silder, mainly for gat year rage
<RangeSlider min={1970} max={2024} step={1} />
DOC__ */
const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const knobWidth = 16;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  const calculateThumbPosition = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const minThumbOffset = (knobWidth * (minValue - min)) / (max - min);
  const maxThumbOffset = (knobWidth * (max - maxValue)) / (max - min);

  const thumbStyles = {
    left: `calc(${calculateThumbPosition(minValue)}% - ${minThumbOffset}px)`,
    right: `calc(${100 - calculateThumbPosition(maxValue)}% - ${maxThumbOffset}px)`,
  };

  return (
    <div className="flex items-center">
      <div className="w-12 text-left flex-none text-xs min_value">
        {minValue}
      </div>
      <div className="relative flex-1 h-2 bg-gray-400 rounded-full w-32 range-input">
        <div
          className="absolute h-2 bg-blue-700 rounded-full"
          style={thumbStyles}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full cursor-pointer range_left"
          style={{ transform: `translateX(calc(-${knobWidth / 2}px))` }}
          aria-label={`Movies from year ${minValue}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full cursor-pointer range_right"
          style={{ transform: `translateX(calc(${knobWidth / 2}px))` }}
          aria-label={`Movies to year ${minValue}`}
        />
      </div>
      <div className="w-12 text-right flex-none text-xs max_value">
        {maxValue}
      </div>
    </div>
  );
};

export default RangeSlider;
