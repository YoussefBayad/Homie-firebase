import React from 'react';
import Sidebar from '../components/Sidebar';

import '../default.scss';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
