import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <nav>
            <Link  className='menu-link' to='/home'>Home</Link>
            <Link className='menu-link' to='/reviews'>Reviews</Link>
            <Link className='menu-link' to='/dashboard'>Dashboard</Link>
            <Link className='menu-link' to='/blogs'>Blogs</Link>
            <Link className='menu-link' to='/about'>About</Link>
            </nav>
            <div>
                <div>
                    
                </div>
            </div>            
        </div>
    );
};

export default Home;