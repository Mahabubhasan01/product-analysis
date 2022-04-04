import React from 'react';

const Review = ({blog}) => {
    const {name,img,text,ratting} = blog
    return (
        <div className='single-comment reviews'>
            <img className='card-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <p><span>Ratting : {ratting}</span></p>
        </div>
    );
};

export default Review;