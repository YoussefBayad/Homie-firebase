import React from 'react';
import MobileNav from '../components/navigation/MobileNav';
import TopMobileNav from '../components/navigation/TopMobileNav';
import Sidebar from '../components/Sidebar';

import '../default.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <TopMobileNav />
      <Sidebar />
      <div className='page-shadow'>{children}</div>
      <MobileNav />
    </div>
  );
};

export default MainLayout;
