import React from 'react';
import './Comment.css'

const Comment = ({comment}) => {
    const {name,img,text,ratting} = comment
    return (
        <div>
            <div className='single-comment'>
            <img className='card-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <span><p>Ratting : {ratting}</p></span>
        </div>
        </div>
    );
};

export default Comment;