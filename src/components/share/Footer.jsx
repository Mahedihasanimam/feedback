import React, { useState } from 'react';
import { HomeOutlined, AppstoreOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { IoListOutline } from 'react-icons/io5';

const Footer = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('home');

  const handleHomeClick = () => {
    setActive('home');
    navigate('/');
  };

  const handleListeClick = () => {
    setActive('list');
    navigate('/list');
  };

  const handleBellClick = () => {
    setActive('bell');
    navigate('/notifications');
  };

  const handleUserClick = () => {
    setActive('user');
    navigate('/profile');
  };

  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2'>
      {/* Home Icon */}
      <button 
        onClick={handleHomeClick} 
        className={`px-3 py-2 rounded-full ${active === 'home' ? 'bg-[#1F3B6B] text-white' : 'text-gray-500'}`}
      >
        <HomeOutlined className={`text-2xl ${active === 'home' ? 'text-white' : 'text-[#424242]'}`} />
      </button>

      {/* list Icon */}
      <button 
        onClick={handleListeClick} 
        className={`px-3 py-2 rounded-full ${active === 'list' ? 'bg-[#1F3B6B] text-white' : 'text-gray-500'}`}
      >
        <IoListOutline className={`text-3xl ${active === 'list' ? 'text-white' : 'text-[#424242]'}`} />
      </button>

      {/* Bell Icon */}
      <button 
        onClick={handleBellClick} 
        className={`px-3 py-2 rounded-full ${active === 'bell' ? 'bg-[#1F3B6B] text-white' : 'text-gray-500'}`}
      >
        <BellOutlined className={`text-2xl ${active === 'bell' ? 'text-white' : 'text-[#424242]'}`} />
      </button>

      {/* User Icon */}
      <button 
        onClick={handleUserClick} 
        className={`px-3 py-2 rounded-full ${active === 'user' ? 'bg-[#1F3B6B] text-white' : 'text-gray-500'}`}
      >
        <UserOutlined className={`text-2xl ${active === 'user' ? 'text-white' : 'text-[#424242]'}`} />
      </button>
    </div>
  );
};

export default Footer;
