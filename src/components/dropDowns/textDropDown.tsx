import { CustomDropdownProps } from "../../types";
import React, { useRef, useState } from "react";

//  text drop down is a drop down whose default  structure of the component is a text with a chevron icon
// =========================== MAIN COMPONENT ================================================================================
export const TextDropDown : React.FC<CustomDropdownProps & {className? : string}> = ({label, options, topic, className, onSelect}) =>{

    //========== STATES
    const [isOpen, setIsOpen] = useState(false);    //  tells component to display drop down menu
    const [displayLabel, setDisplayLabel] = useState<string | number>(label || '--default--');   //  state store dropdown selection
    const dropdownRef = useRef<HTMLDivElement | null>(null);    //   ref to drop down menu
    
    //========== FUNCTIONS
    const toggleDropdown = () => setIsOpen((prev) => !prev); // handles menu toggling
    const handleSelect = (option: string) => { //handles option selection
        if (onSelect) onSelect(option);
        setDisplayLabel(option);
        setIsOpen(false); // Close the dropdown after selection
    }; 

    return (
        <div className={"relative w-fit flex gap-0.5 items-center " + (className || '')}>
          { topic && (<h6 className="capitalize text-high-l dark:text-high-d">{topic}</h6>)}
          <button
            onClick={toggleDropdown}
            className="p-1 capitalize leading-none font-medium bg-none text-link-l dark:text-link-d"
          >
            {displayLabel}
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className={` absolute z-10 w-fit min-w-full font-medium bg-sur-l dark:bg-sur-d shadow-lg rounded-lg border border-low-l dark:border-low-d left-0 top-full mt-1 overflow-hidden`}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="p-2 cursor-pointer  hover:bg-sur-l dark:hover:bg-sur-d text-link-l dark:text-link-d"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
}