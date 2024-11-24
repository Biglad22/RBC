import React, { useState, useRef, useEffect } from "react";
import { CustomDropdownProps } from "../../types";
import BoxIcon from "../boxIcon/boxIcon";
//  in dynamic drop down, drop down menu direction changes based on dropdown component's position on viewPort
//  if component is close to the bottom of the viewport, drop down menu is expected to open at the top of component
//  else it is expected to open at the bottom




//===================== main component ========================================================================
const CustomDropdown: React.FC<CustomDropdownProps> = (
    { label, options, onSelect }
) => {

    //======== state
    const [isOpen, setIsOpen] = useState(false);    //tells component to display drop down menu
    const [displayLabel, setDisplayLabel] = useState<string | number>(label || "--default--"); //state store dropdown selection
    const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">("bottom");   //determines the position of drop-down menu
    const dropdownRef = useRef<HTMLDivElement | null>(null); 


    //  updates drop down menu position
    //  if menu cuts below the viewport, menu position should adjust to accommodate menu  
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Adjust position based on available space
            if (rect.bottom > windowHeight) setDropdownPosition("top");
            else setDropdownPosition("bottom");
        }
    }, [isOpen]);


    //============================== FUNCTIONS ===========================================
    
    const toggleDropdown = () => setIsOpen((prev) => !prev); // handles menu toggling
    
    const handleSelect = (option: string) => { //handles option selection
        if (onSelect) onSelect(option);
        setDisplayLabel(option);
        setIsOpen(false); // Close the dropdown after selection
    };  

    
    return (
      <div className="relative block">
        <button
          onClick={toggleDropdown}
          className="p-2 pb-1.5 capitalize w-full leading-none font-medium bg-sur-l dark:bg-sur-d text-link-l dark:text-link-d border-2 border-low-l dark:border-low-d shadow-sm rounded-md focus:outline-none flex gap-2 justify-between items-center"
        >
          <span className="pb-1">{displayLabel}</span>
          <BoxIcon name={isOpen?'chevron-up' : 'chevron-down'} size='sm'  />
        </button>
        {isOpen && (
          <div
            ref={dropdownRef}
            className={`absolute z-10 min-w-fit w-full bg-sur-l dark:bg-sur-d text-link-l dark:text-link-d shadow-lg rounded-lg border border-low-l dark:border-low-d ${
              dropdownPosition === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
            }`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-light dark:hover:bg-dark"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default CustomDropdown;
