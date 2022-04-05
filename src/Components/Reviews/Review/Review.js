import React from 'react';
import { BeakerIcon } from '@heroicons/react/solid'


const Review = ({blog}) => {
    const {name,img,text,ratting} = blog
    return (
        <div className='single-comment reviews'>
            <img className='card-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <p><span>Ratting : {ratting}</span><span>      <BeakerIcon className="h-5 w-5 text-blue-500"/>
</span></p>
        </div>
    );
};

export default Review;