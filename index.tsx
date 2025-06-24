import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Table from '../../components/ui/Table';

interface SessionData {
  date: string;
  value: number;
}

interface CountryData {
  country: string;
  percentage: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('Today');
  
  const timeFilters = ['Today', '1d', '7d', '1m', '1y'];
  
  const sessionData: SessionData[] = [
    { date: '01 Nov', value: 30000 },
    { date: '02 Nov', value: 35000 },
    { date: '03 Nov', value: 40000 },
    { date: '04 Nov', value: 45000 },
    { date: '05 Nov', value: 42000 },
    { date: '06 Nov', value: 48000 },
    { date: '07 Nov', value: 50000 }
  ];

  const countryData: CountryData[] = [
    { country: 'United States', percentage: 31 },
    { country: 'United Kingdom', percentage: 17 },
    { country: 'France', percentage: 12 },
    { country: 'Italy', percentage: 12 },
    { country: 'Romania', percentage: 6 },
    { country: 'Ukraine', percentage: 5 },
    { country: 'Spain', percentage: 4 },
    { country: 'Germany', percentage: 4 },
    { country: 'Japan', percentage: 3 },
    { country: 'India', percentage: 2 }
  ];

  const channelData = [
    { channel: 'Organic Search', visits: '45,234' },
    { channel: 'Direct', visits: '32,156' },
    { channel: 'Social Media', visits: '18,943' },
    { channel: 'Email', visits: '12,567' },
    { channel: 'Referral', visits: '8,234' }
  ];

  const socialChannelData = [
    { channel: 'Facebook', visits: '12,345' },
    { channel: 'Instagram', visits: '8,976' },
    { channel: 'Twitter', visits: '6,543' },
    { channel: 'LinkedIn', visits: '4,321' },
    { channel: 'YouTube', visits: '3,210' }
  ];

  return (
    <div className="flex flex-row bg-global-1 min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1" style={{ marginLeft: '220px' }}>
        {/* Header */}
        <Header />

        {/* Page Title */}
        <div className="flex flex-row items-center justify-between bg-global-1 px-5 py-6">
          <h1 className="text-2xl font-bold font-roboto text-global-5">
            Dashboards
          </h1>
          <div className="flex flex-row space-x-6">
            <span className="text-sm font-roboto text-global-3 border-b border-global-3 pb-1">
              Analytics
            </span>
            <span className="text-sm font-roboto text-global-4">
              E-Commerce
            </span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-col px-5 space-y-6">
          {/* First Row - Browser Stats and Sessions Chart */}
          <div className="flex flex-row space-x-5">
            {/* Session by Browser */}
            <div className="bg-global-2 rounded-xl shadow-lg" style={{ width: '540px' }}>
              <div className="flex flex-row items-center justify-between px-6 py-4">
                <h2 className="text-base font-bold font-roboto text-global-5">
                  SESSION BY BROWSER
                </h2>
                <button className="bg-global-2 rounded-2xl p-2">
                  <img 
                    src="/images/img_iconbuttonrounded.svg" 
                    alt="Options" 
                    className="w-8 h-8"
                  />
                </button>
              </div>
              <Table />
            </div>

            {/* Sessions Chart */}
            <div className="bg-global-2 rounded-xl shadow-lg flex-1">
              <div className="flex flex-row items-center justify-between px-6 py-4">
                <h2 className="text-base font-bold font-roboto text-global-5">
                  SESSIONS
                </h2>
                <div className="flex flex-row space-x-4">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedTimeFilter(filter)}
                      className={`text-sm font-roboto px-2 py-1 ${
                        selectedTimeFilter === filter 
                          ? 'text-global-1' :'text-global-5'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Area */}
              <div className="px-6 pb-6">
                <div className="flex flex-row">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between h-64 pr-4">
                    <span className="text-xs font-roboto text-global-2">50k</span>
                    <span className="text-xs font-roboto text-global-2">40k</span>
                    <span className="text-xs font-roboto text-global-2">30k</span>
                    <span className="text-xs font-roboto text-global-2">20k</span>
                    <span className="text-xs font-roboto text-global-2">10k</span>
                    <span className="text-xs font-roboto text-global-2">0k</span>
                  </div>

                  {/* Chart */}
                  <div className="flex-1 relative">
                    <img 
                      src="/images/img_group_128.png" 
                      alt="Sessions Chart" 
                      className="w-full h-56"
                    />
                    
                    {/* X-axis labels */}
                    <div className="flex flex-row justify-between mt-2">
                      {sessionData.map((data) => (
                        <span key={data.date} className="text-xs font-roboto text-global-2">
                          {data.date}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Session by Country */}
          <div className="bg-global-2 rounded-xl shadow-lg">
            <div className="flex flex-row items-center justify-between px-6 py-4">
              <h2 className="text-base font-bold font-roboto text-global-5">
                SESSION BY COUNTRY
              </h2>
              <button className="bg-global-2 rounded-2xl p-2">
                <img 
                  src="/images/img_iconbuttonrounded.svg" 
                  alt="Options" 
                  className="w-8 h-8"
                />
              </button>
            </div>

            <div className="flex flex-row px-6 pb-6">
              {/* World Map */}
              <div className="relative mr-8">
                <div className="relative">
                  <img 
                    src="/images/img_group_128.png" 
                    alt="World Map" 
                    className="w-96 h-80"
                    style={{ filter: 'hue-rotate(200deg)' }}
                  />
                  
                  {/* Map Controls */}
                  <div className="absolute top-0 left-0 flex flex-col space-y-1">
                    <button className="bg-global-5 rounded-md p-1">
                      <img 
                        src="/images/img_icons_gray_900.svg" 
                        alt="Zoom In" 
                        className="w-5 h-5"
                      />
                    </button>
                    <button className="bg-global-5 rounded-md p-1">
                      <img 
                        src="/images/img_icons_gray_900_20x20.svg" 
                        alt="Zoom Out" 
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Country Statistics */}
              <div className="flex-1">
                {/* Country Labels */}
                <div className="flex flex-col space-y-4 mb-6">
                  {countryData.map((country, index) => (
                    <div key={index} className="text-right">
                      <span className="text-xs font-roboto text-global-4">
                        {country.country}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="flex flex-col space-y-4 mb-6">
                  {countryData.map((country, index) => (
                    <div key={index} className="flex flex-row items-center">
                      <div className="bg-global-4 rounded-sm h-3.5 flex-1">
                        <div 
                          className="bg-global-3 h-full rounded-sm"
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Percentage Scale */}
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">0%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">20%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">40%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">60%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">80%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-1.5 bg-global-2 mb-1"></div>
                    <span className="text-xs font-roboto text-global-2">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Channels and Social Channels */}
          <div className="flex flex-row space-x-5">
            {/* Channels */}
            <div className="bg-global-2 rounded-xl shadow-lg flex-1">
              <div className="flex flex-row items-center justify-between px-6 py-4">
                <h2 className="text-base font-bold font-roboto text-global-5">
                  CHANNELS
                </h2>
                <button className="bg-global-2 rounded-2xl p-2">
                  <img 
                    src="/images/img_iconbuttonrounded.svg" 
                    alt="Options" 
                    className="w-8 h-8"
                  />
                </button>
              </div>

              {/* Table Header */}
              <div className="flex flex-row px-6 py-2">
                <span className="text-xs font-medium font-roboto text-global-2 flex-1">
                  Channel
                </span>
                <span className="text-xs font-medium font-roboto text-global-2 w-24 text-right">
                  Visits
                </span>
              </div>

              {/* Table Data */}
              <div className="px-6 pb-6">
                {channelData.map((item, index) => (
                  <div key={index} className="flex flex-row items-center py-3 border-t border-global-4">
                    <span className="text-sm font-roboto text-global-4 flex-1">
                      {item.channel}
                    </span>
                    <span className="text-sm font-roboto text-global-4 w-24 text-right">
                      {item.visits}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-global-2 rounded-xl shadow-lg flex-1">
              <div className="flex flex-row items-center justify-between px-6 py-4">
                <h2 className="text-base font-bold font-roboto text-global-5">
                  SOCIAL CHANNELS
                </h2>
                <button className="bg-global-2 rounded-2xl p-2">
                  <img 
                    src="/images/img_iconbuttonrounded.svg" 
                    alt="Options" 
                    className="w-8 h-8"
                  />
                </button>
              </div>

              {/* Table Header */}
              <div className="flex flex-row px-6 py-2">
                <span className="text-xs font-medium font-roboto text-global-2 flex-1">
                  Channel
                </span>
                <span className="text-xs font-medium font-roboto text-global-2 w-24 text-right">
                  Visits
                </span>
              </div>

              {/* Table Data */}
              <div className="px-6 pb-6">
                {socialChannelData.map((item, index) => (
                  <div key={index} className="flex flex-row items-center py-3 border-t border-global-4">
                    <span className="text-sm font-roboto text-global-4 flex-1">
                      {item.channel}
                    </span>
                    <span className="text-sm font-roboto text-global-4 w-24 text-right">
                      {item.visits}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;