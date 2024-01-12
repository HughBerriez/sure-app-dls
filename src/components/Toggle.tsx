"use client";

import React from "react";

interface ToggleProps {
  isToggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleProps> = ({ isToggled, onToggle }) => {
  return (
    <div
      className={`flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? "bg-brand" : "bg-gray-300"
      }`}
      style={{ width: "3rem", height: "1.75rem", flexShrink: 0, flexGrow: 0 }}
      onClick={onToggle}
    >
      <div
        className={`bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          isToggled ? "translate-x-5" : ""
        }`}
        style={{ width: "1.25rem", height: "1.25rem" }}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
