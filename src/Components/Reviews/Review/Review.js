import React from 'react';

const Review = ({blog}) => {
    const {name,img,text} = blog
    return (
        <div className='single-comment reviews'>
            <img className='card-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Review;