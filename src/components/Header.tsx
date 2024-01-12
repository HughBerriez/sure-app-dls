"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  const [isInputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input
  const inputBg = "bg-white";

  const focusInput = () => {
    inputRef.current?.focus(); // Focus the input when the container is clicked
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-8 border-b-[1px] border-b-slate-300 py-3">
      <Logo theme="dark" />

      <div
        className={`flex flex-row items-center rounded border-[1px] px-5 py-3 ${
          isInputFocused ? "ring-2 ring-brand-light" : "border-slate-300"
        } ${inputBg}`}
        onClick={focusInput}
      >
        <Image
          src="/magnifying-glass-outline.svg"
          alt="Search icon"
          width={24}
          height={24}
        />
        <input
          ref={inputRef}
          placeholder="Search"
          className={`px-2 ${inputBg} focus:outline-none`}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
    </header>
  );
}
