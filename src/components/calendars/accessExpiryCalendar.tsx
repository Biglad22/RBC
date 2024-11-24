import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarDropdown: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Adjust dropdown position dynamically
  useEffect(() => {
    if (isDropdownOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = 300; // Approx height of dropdown
      const viewportHeight = window.innerHeight;
      const dropdownTop = viewportHeight - (buttonRect.y + buttonRect.height);

      setDropdownStyle({
        position: "absolute",
        top: dropdownTop < dropdownHeight? '-308px' : '8px' ,
        right: 0,
        zIndex: 11,
      });
    }
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleDropdown}
      >
        {selectedDate ? selectedDate.toLocaleString() : "Select Date & Time"}
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          style={dropdownStyle}
          className="bg-white border border-gray-300 rounded shadow-lg w-80 p-4"
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
            fixedHeight
          />
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
