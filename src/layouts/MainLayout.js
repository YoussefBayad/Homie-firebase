import React from 'react';
import Sidebar from '../components/Sidebar';

import '../default.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <div className='sidebar-placeholder'></div>
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
