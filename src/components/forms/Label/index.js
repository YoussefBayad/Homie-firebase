import React from 'react'
import '../../../default.scss';

const Label = ({children, ...otherProps}) => {
    return (
        <label className='label' {...otherProps}>
            {children}
        </label>
    )
}

export default Label
