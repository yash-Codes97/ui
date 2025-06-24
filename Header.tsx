import React, { useState } from 'react';
import SearchView from '../ui/SearchView';
import Dropdown from '../ui/Dropdown';
import SettingsModal from '../ui/SettingsModal';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-row bg-global-1 ${className}`} style={{ width: '1700px', height: '100px', marginLeft: '220px' }}>
        <div className="flex flex-row items-center bg-global-2 shadow-lg rounded-xl mx-5 my-5 px-6 flex-1">
          {/* Menu Button */}
          <button className="bg-global-2 rounded-md p-2 mr-4">
            <img 
              src="/images/img_topbar_items.svg" 
              alt="Menu" 
              className="w-10 h-10"
            />
          </button>

          {/* Search */}
          <SearchView className="w-65 mr-auto" />

          {/* Language Selector */}
          <div className="flex flex-row items-center mr-4">
            <img 
              src="/images/img_flags_gb.svg" 
              alt="Flag" 
              className="w-5 h-5 mr-2"
            />
            <Dropdown />
          </div>

          {/* Settings Button */}
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="bg-global-2 rounded-md p-2 mr-4 hover:bg-global-4 transition-colors"
            title="Settings"
          >
            <img 
              src="/images/img_icons_white_a700.svg" 
              alt="Settings" 
              className="w-6 h-6"
            />
          </button>

          {/* Notification Button */}
          <button className="bg-global-2 rounded-md p-2 mr-4">
            <img 
              src="/images/img_topbar_items_blue_gray_600.svg" 
              alt="Notifications" 
              className="w-10 h-10"
            />
          </button>

          {/* Notification Badge */}
          <div className="relative bg-global-2 rounded-md p-2 mr-4">
            <img 
              src="/images/img_icons_blue_gray_600_24x24.svg" 
              alt="Bell" 
              className="w-6 h-6"
            />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-header-1 rounded-full border-2 border-global-2"></div>
          </div>

          {/* User Controls */}
          <div className="flex flex-row items-center bg-global-5 rounded-xl px-1 py-1 mr-4">
            <img 
              src="/images/img_icons_white_a700.svg" 
              alt="Settings" 
              className="w-4 h-4 mr-1"
            />
            <button className="bg-global-4 rounded-lg p-1">
              <img 
                src="/images/img_group_2.svg" 
                alt="More" 
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Profile */}
          <img 
            src="/images/img_ellipse_3.png" 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
};

export default Header;