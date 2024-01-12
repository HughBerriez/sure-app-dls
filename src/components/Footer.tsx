import Image from "next/image";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center px-8 border-b-[1px] border-b-slate-300">
      <Logo theme="light" />

      <div>
        <p className="text-slate-300 text-sm font-medium leading-5">
          © 2021 Triangles, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
