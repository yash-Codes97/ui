import React from 'react';

interface TableRow {
  id: string;
  browser: string;
  icon: string;
  percentage: string;
  value: string;
  trend: 'up' | 'down';
  trendIcon: string;
}

interface TableProps {
  data?: TableRow[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ 
  data = [
    {
      id: "1",
      browser: "Chrome",
      icon: "/images/img_chrome.png",
      percentage: "36%",
      value: "2.2%",
      trend: "down",
      trendIcon: "/images/img_icons_pink_a200.svg"
    },
    {
      id: "2",
      browser: "Safari",
      icon: "/images/img_safari.png",
      percentage: "27%",
      value: "5.1%",
      trend: "up",
      trendIcon: "/images/img_icons_teal_a700.svg"
    },
    {
      id: "3",
      browser: "Mozilla",
      icon: "/images/img_mozilla.png",
      percentage: "18%",
      value: "1.6%",
      trend: "up",
      trendIcon: "/images/img_icons_teal_a700.svg"
    },
    {
      id: "4",
      browser: "Opera",
      icon: "/images/img_opera.png",
      percentage: "6%",
      value: "1%",
      trend: "down",
      trendIcon: "/images/img_icons_pink_a200.svg"
    },
    {
      id: "5",
      browser: "Brave",
      icon: "/images/img_brave.png",
      percentage: "2%",
      value: "3%",
      trend: "up",
      trendIcon: "/images/img_icons_teal_a700.svg"
    }
  ],
  className = ""
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Table Header */}
      <div className="flex flex-row items-center py-2 px-6">
        <span className="text-xs font-medium font-roboto text-global-2 w-8">
          #
        </span>
        <span className="text-xs font-medium font-roboto text-global-2 flex-1">
          Browser
        </span>
        <span className="text-xs font-medium font-roboto text-global-2 w-20 text-center">
          Percentage %
        </span>
        <span className="text-xs font-medium font-roboto text-global-2 w-16 text-right">
          Value
        </span>
      </div>

      {/* Table Data */}
      <div className="flex flex-col">
        {data.map((row, index) => (
          <div 
            key={row.id}
            className="flex flex-row items-center py-4 px-6 border-t border-global-4"
          >
            <span className="text-sm font-roboto text-global-4 w-8">
              {row.id}
            </span>
            <div className="flex flex-row items-center flex-1">
              <img 
                src={row.icon} 
                alt={row.browser} 
                className="w-10 h-10 mr-3"
              />
              <span className="text-sm font-roboto text-global-4">
                {row.browser}
              </span>
            </div>
            <span className="text-sm font-roboto text-global-4 w-20 text-center">
              {row.percentage}
            </span>
            <div className="flex flex-row items-center w-16 justify-end">
              <img 
                src={row.trendIcon} 
                alt="Trend" 
                className="w-4 h-4 mr-1"
              />
              <span className={`text-sm font-roboto ${row.trend === 'up' ? 'text-table-1' : 'text-table-2'}`}>
                {row.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;