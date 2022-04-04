import React from 'react';
import './Comment.css'

const Comment = ({comment}) => {
    const {name,img,text} = comment
    return (
        <div className='single-comment'>
            <div>{name}</div>
            <div>{img}</div>
            <div></div>
        </div>
    );
};

export default Comment;