import React from 'react';
import './Comment.css'

const Comment = ({comment}) => {
    const {name,img,text} = comment
    return (
        <div className='single-comment'>
            <img className='card-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Comment;