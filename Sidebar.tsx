import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
  isActive?: boolean;
}

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { icon: "/images/img_icons.svg", label: "Dashboards", path: "/analytics-dashboard", isActive: true },
    { icon: "/images/img_icons_blue_gray_600.svg", label: "Calendar", path: "/calendar" },
    { icon: "/images/img_icons_blue_gray_600_16x16.svg", label: "Chat", path: "/chat" },
    { icon: "/images/img_icons_16x16.svg", label: "E-Commerce", path: "/ecommerce" },
    { icon: "/images/img_mail.svg", label: "E-Mail", path: "/email" },
    { icon: "/images/img_icons_1.svg", label: "Projects", path: "/projects" },
    { icon: "/images/img_icons_2.svg", label: "Social", path: "/social" },
    { icon: "/images/img_icons_3.svg", label: "File Manager", path: "/file-manager" },
    { icon: "/images/img_icons_4.svg", label: "Pages", path: "/pages" },
    { icon: "/images/img_icons_5.svg", label: "UI Components", path: "/ui-components" },
    { icon: "/images/img_icons_6.svg", label: "Authentication", path: "/authentication" }
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`flex flex-col bg-global-2 shadow-lg ${className}`} style={{ width: '200px', height: '1111px' }}>
      {/* Logo */}
      <div className="px-5 py-5">
        <img 
          src="/images/img_sidebarlogo.png" 
          alt="Logo" 
          className="w-26 h-10"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col px-4 space-y-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleMenuClick(item.path)}
            className={`flex flex-row items-center px-4 py-3 rounded-md cursor-pointer transition-colors ${
              item.isActive 
                ? 'bg-sidebar-1' :'bg-global-2 hover:bg-global-4'
            }`}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className="w-4 h-4 mr-3"
            />
            <span className={`text-sm font-roboto ${
              item.isActive ? 'text-sidebar-2' : 'text-sidebar-1'
            }`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;