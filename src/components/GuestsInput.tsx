"use client";

import React, { useState } from "react";

const GuestsInput = () => {
  const [numGuests, setNumGuests] = useState(1);

  const handleIncrement = () => {
    setNumGuests((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setNumGuests((prev) => Math.max(1, prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumGuests(isNaN(value) ? 0 : Math.max(0, value));
  };

  return (
    <div className="flex items-center">
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        value={numGuests}
        onChange={handleChange}
        className="mx-2 w-12 text-center"
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default GuestsInput;
