import React from "react";

interface ButtonProps {
  variant: "solid" | "outline";
  children: React.ReactNode;
  href?: string; // Optional href prop for navigation
}

const Button: React.FC<ButtonProps> = ({ variant, children, href }) => {
  const baseStyles =
    "text-sm font-bold px-5 py-2 rounded focus:outline-none transition duration-300 w-full cursor-pointer";
  const solidStyles =
    "bg-brand text-white hover:bg-brand-light active:bg-brand-dark";
  const outlineStyles =
    "border border-brand text-brand hover:bg-brand-light hover:text-white active:bg-brand-dark";

  const styles = `${baseStyles} ${
    variant === "solid" ? solidStyles : outlineStyles
  }`;

  // Render as a link if href is provided, otherwise as a button
  return href ? (
    <a href={href} target="_blank" className={styles}>
      {children}
    </a>
  ) : (
    <button className={styles}>{children}</button>
  );
};

export default Button;
