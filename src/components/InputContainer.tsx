import React from "react";

interface InputContainerProps {
  label: string;
  children: React.ReactNode;
}

const InputContainer: React.FC<InputContainerProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-bold">{label}</label>
      {children}
    </div>
  );
};

export default InputContainer;
