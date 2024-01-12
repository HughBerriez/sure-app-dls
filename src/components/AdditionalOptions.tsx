"use client";

import React, { useState } from "react";
import Toggle from "./Toggle";

export default function AdditionalOptions() {
  const [additionalOptionsData, setAdditionalOptionsData] = useState([
    {
      price: "$100",
      title: "Party",
      description:
        "Extends total amount of guests allowed to 30 and allows loud music.",
      toggled: true,
    },
    {
      price: "$50",
      title: "Music video recording",
      description:
        "Site may be featured in music video or social media content.",
      toggled: false,
    },
    {
      price: "$200",
      title: "On-site bartender",
      description: "Bartending services (includes alcohol).",
      toggled: false,
    },
  ]);

  // Function to handle toggle change
  const handleToggle = (index: number) => {
    setAdditionalOptionsData((current) =>
      current.map((item, idx) =>
        idx === index ? { ...item, toggled: !item.toggled } : item
      )
    );
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="text-2xl font-semibold">Additional Options</div>
      <div className="border-2">
        {additionalOptionsData.map((option, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between space-x-4 my-6 px-6"
          >
            <div className="flex flex-row space-x-4 items-center">
              <div className="text-teal-500 text-2xl font-semibold  min-w-20">
                {option.price}
              </div>

              <div>
                <div className="font-semibold">{option.title}</div>
                <div>{option.description}</div>
              </div>
            </div>
            <Toggle
              isToggled={option.toggled}
              onToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
