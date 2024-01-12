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
    <div className="flex items-center border-[1px] rounded border-slate-300 px-5 py-3 justify-between">
      <button
        onClick={handleDecrement}
        className="font-semibold hover:bg-slate-200 active:bg-slate-400 rounded-full w-6 h-6 items-center justify-center"
      >
        -
      </button>
      <input
        type="number"
        value={numGuests}
        onChange={handleChange}
        className="mx-2 w-12 text-center pl-4"
      />
      <button
        onClick={handleIncrement}
        className="font-semibold hover:bg-slate-200 active:bg-slate-400 rounded-full w-6 h-6 items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default GuestsInput;
