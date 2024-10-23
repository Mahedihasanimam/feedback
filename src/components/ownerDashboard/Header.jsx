import React from "react";
import logo from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-[#F2F2F2]">
      <h1>Hello, Amazon_bd</h1>
      <div>
        <div className="flex items-center space-x-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#D2D8E1" />
          </svg>

          <image src={logo} width="100" height="100" />
          <h2 className="text-[#424242] font-bold text-[20px]">Amazon_bd</h2>
        </div>

      </div>
    </div>
  );
};

export default Header;
