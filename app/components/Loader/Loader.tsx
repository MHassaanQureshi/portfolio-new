'use client';
import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // show for 2.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black">
      <div className="relative flex h-[250px] aspect-square items-center justify-center">
        <div className="absolute z-[999] flex h-[60px] w-[60px] items-center justify-center animate-opacityChange">
          {/* Replace with your SVG/logo */}
          <svg
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 12L13 14.333V19L20 14.333V9.667L13 5V9.667L16.5 12Z"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Ripple effect boxes */}
        <div className="absolute z-[99] aspect-square w-[25%] rounded-full border-t border-gray-400 backdrop-blur-sm shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-ripple" />
        <div className="absolute z-[98] inset-[30%] rounded-full border-t border-gray-400/80 backdrop-blur-sm shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-ripple delay-[200ms]" />
        <div className="absolute z-[97] inset-[20%] rounded-full border-t border-gray-400/60 backdrop-blur-sm shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-ripple delay-[400ms]" />
        <div className="absolute z-[96] inset-[10%] rounded-full border-t border-gray-400/40 backdrop-blur-sm shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-ripple delay-[600ms]" />
        <div className="absolute z-[95] inset-[0%] rounded-full border-t border-gray-400/20 backdrop-blur-sm shadow-[0_10px_10px_rgba(0,0,0,0.3)] animate-ripple delay-[800ms]" />
      </div>
    </div>
  );
};

export default Loader;
