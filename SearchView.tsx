import React from 'react';

interface SearchViewProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const SearchView: React.FC<SearchViewProps> = ({ 
  placeholder = "Search here...", 
  value = "", 
  onChange,
  className = ""
}) => {
  return (
    <div className={`flex flex-row items-center bg-global-4 rounded-md px-3 py-2 ${className}`}>
      <img 
        src="/images/img_search.svg" 
        alt="Search" 
        className="w-5 h-5 mr-3"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-transparent text-sm font-roboto text-searchview-1 outline-none flex-1"
      />
    </div>
  );
};

export default SearchView;