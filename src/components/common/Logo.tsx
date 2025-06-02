import React from 'react';

interface LogoProps {
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark = false }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg width="36\" height="36\" viewBox="0 0 36 36\" fill="none\" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M18 3L33 12V24L18 33L3 24V12L18 3Z" 
            stroke={isDark ? "#2d2d2d" : "#ffffff"} 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M18 9L27 14V22L18 27L9 22V14L18 9Z" 
            fill={isDark ? "#cba54c" : "#d9b973"} 
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-serif text-lg font-bold leading-tight ${isDark ? 'text-primary-800' : 'text-white'}`}>
          STONE
        </span>
        <span className={`font-serif text-xs tracking-wider ${isDark ? 'text-primary-600' : 'text-primary-100'}`}>
          STYLE
        </span>
      </div>
    </div>
  );
};

export default Logo;