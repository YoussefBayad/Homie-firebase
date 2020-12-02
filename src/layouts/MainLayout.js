import React from 'react';
import MobileNav from '../components/navigation/MobileNav';
import Sidebar from '../components/Sidebar';

import '../default.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />
      <div className='page-shadow'>{children}</div>
      <MobileNav />
    </div>
  );
};

export default MainLayout;
