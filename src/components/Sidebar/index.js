import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../../Firebase/utils'
import UserInfo from '../UserInfo'

//style
import './style.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
                <h1 className='title'>Homie</h1>
                <UserInfo/>
                <nav className='home-nav'>
                        <Link  to='/' className='link'>
                        <img src="/assets/icon/search.png" alt="icon"/>
                            <p>Feed</p>
                        </Link>
                        <Link to='/chat' className='link'>
                        <img src="./assets/icon/search.png" alt="icon"/>
                            <p>Mingle</p>
                        </Link>
                        <Link to='/chat' className='link'>
                        <img src="./assets/icon/search.png" alt="icon"/>
                            <p>notification</p>
                        </Link>
                        <Link to='/notification' className='link'>
                            <img src="/assets/icon/search.png" alt="icon"/>
                            <p>Post</p>
                        </Link>
                        <Link to='/profile' className='link'>
                        <img src="/assets/icon/search.png" alt="icon"/>
                            <p>Profile</p>
                        </Link>
                    <div className="link" onClick={()=>auth.logout()}>
                    <img src="/assets/icon/search.png" alt="icon"/>
                            <p>Logout</p>
                    </div>
                </nav>
           </div>
    )
}

export default Sidebar
