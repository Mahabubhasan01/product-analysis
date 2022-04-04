import React from 'react';
import './Error.css'
import gif from './Error-Page.gif'

const Error = () => {
    return (
        <div>
            <img className='gif' src={gif} alt="" />
        </div>
    );
};

export default Error;