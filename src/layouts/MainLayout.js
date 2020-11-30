import React from 'react';
import Sidebar from '../components/Sidebar';

import '../default.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />
      <div className='page-shadow'>{children}</div>
    </div>
  );
};

export default MainLayout;
