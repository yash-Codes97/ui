import React, { useState } from 'react';

interface DropdownProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  options = ["English"], 
  value = "English", 
  onChange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-roboto text-sidebar-1 mr-2">
          {value}
        </span>
        <img 
          src="/images/img_arrowdown.svg" 
          alt="Arrow Down" 
          className="w-4 h-4"
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 bg-global-2 rounded-md shadow-lg mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 text-sm font-roboto text-global-4 hover:bg-global-4 cursor-pointer"
              onClick={() => {
                onChange?.(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;