import React from 'react';
import CustomHook from '../../CustomHook/CustomHook';
import Review from './Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [blogs,setBlogs] = CustomHook()
    
    return (
        <div className='comment'>
            {
                blogs.map(blog=><Review
                blog={blog}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;