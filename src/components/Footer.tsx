import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-9 space-y-3 border-b-[1px] border-b-white bg-brand ">
      <div className="flex flex-row items-center space-x-10">
        <Logo theme="light" />
        <div className="text-white text-sm font-normal text-center">
          © 2023 Triangles, Inc.
        </div>
      </div>

      <div className="flex flex-row items-center space-x-10">
        <p className="text-white text-sm font-medium">Terms of Use</p>
        <p className="text-white text-sm font-medium">Privacy Policy</p>
      </div>
    </footer>
  );
}
