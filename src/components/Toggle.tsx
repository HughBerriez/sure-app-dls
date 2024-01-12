"use client";
import React from "react";

interface ToggleProps {
  isToggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleProps> = ({ isToggled, onToggle }) => {
  return (
    <div
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? "bg-brand" : "bg-gray-300"
      }`}
      onClick={onToggle} // Use the passed onToggle function
    >
      {/* Slider */}
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          isToggled ? "translate-x-7" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
