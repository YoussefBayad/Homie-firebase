import React from 'react';
import './style.scss';

const UserInfo = () => {
    return (
        <div className="user-info">  
        <div className="circle">
        <img src="/assets/icon/me.jpg" alt=""/>
        </div>
        <h3 className='username'>Joseph Bayad</h3>
        <h4 className="bio">I will Make it</h4>
        <div className="profile-numbers">
            <div className="profile-number">
                <p>46</p>
                <p>posts</p>
            </div>
            <div className="profile-number">
                <p>2.8k</p>
                <p>followers</p>
            </div>
            <div className="profile-number">
                <p>54</p>
                <p>following</p>
            </div>
        </div>
        </div>
    )
}

export default UserInfo
