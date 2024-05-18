import React from 'react';
import { Tooltip } from '@chakra-ui/react';

const User = ({ user, hoveredUserId, handleDeleteUser, handleMouseEnter, handleMouseLeave }) => {
  const handleDeleteButtonClick = () => {
    handleDeleteUser(user.id);
  };

  return (
    <li key={user.id}>
      <div id='color' style={{ backgroundColor: hoveredUserId === user.id ? '#FC8181' : '#4299E1' }}></div>
      <p id='data'>
        <span id='ids'><b>{user.id}</b></span>|{user.Name}: {user.Password} 
      </p>
      <Tooltip label='Delete' placement='right'>
        <button id='delete' onClick={handleDeleteButtonClick} onMouseEnter={() => handleMouseEnter(user.id)} onMouseLeave={handleMouseLeave}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ai ai-Cross">
            <path d="M20 20L4 4m16 0L4 20"/>
          </svg>
        </button>
      </Tooltip>
    </li>
  );
};

export default User;
