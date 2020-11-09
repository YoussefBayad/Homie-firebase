import React from 'react';
import '../default.scss'

const ContainerLayout = ({ children }) => {
    return (
        <div className="container">{children}</div>
    );
};

export default  ContainerLayout;