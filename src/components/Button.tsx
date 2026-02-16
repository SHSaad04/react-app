import React from "react";
interface Prop {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Prop) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
