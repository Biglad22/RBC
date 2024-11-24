import React from "react";

// since box icon does not have a react component this custom component was create for it to maintain consistency
// component provides an outline icon

// BoxIcon prop props type
interface BoxIconProps {
  name: string; // Icon class (e.g., "heart", "star")
  color?: string; // Optional icon color
  size?: string | number; // Optional icon size (e.g., "24px" or "2rem")
  className?: string; // Additional Tailwind or custom classes
}

// =================== MAIN COMPONENT ================================================
const BoxIcon: React.FC<BoxIconProps> = ({ name, color, size = 'md', className }) => {
  return (
    <i
      className={`bx bx-${name} bx-${size} leading-none ${className || ""} `}
      style={{ color}}
    ></i>
  );
};

export default BoxIcon;
