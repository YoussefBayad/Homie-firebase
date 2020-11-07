import React from 'react';
// import Header from '../components/Header';
// import AdminToolBar from '../components/AdminToolBar';
import '../default.scss'
const MainLayout = ({ children }) => {
    return (
        <div className="container">{children}</div>
    );
};

export default MainLayout;