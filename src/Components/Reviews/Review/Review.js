import React from 'react';

const Review = ({blog}) => {
    const {name,img,text} = blog
    return (
        <div className='single-comment'>
            <h1>{name}</h1>
        </div>
    );
};

export default Review;