import Image from "next/image";
import React from "react";

type theme = "light" | "dark";

interface LogoProps {
  theme: theme;
}

export default function Logo({ theme }: LogoProps) {
  // custom color styling and img import based off theme prop
  // if theme is light, use light logo and teal text
  // if theme is dark, use dark logo and white text
  const logoColor = theme === "light" ? "text-white" : "text-teal-500";
  const logoImg =
    theme === "light"
      ? "/triangle-logo-mark_light.svg"
      : "/triangle-logo-mark_dark.svg";

  return (
    <div className="flex flex-row items-center">
      <Image src={logoImg} alt="Triangles logo-mark" width={70} height={70} />
      <p className={`${logoColor} text-xl font-bold leading-7`}>Triangles</p>
    </div>
  );
}
