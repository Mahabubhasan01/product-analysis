import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <div className='blog'>
                    <h3>What is Context Api?...</h3><br />
                    <p>The Context shares information on any component without drilling. We know that react props work synchronously and step by step. Although when we pass data need permission into every other child component. On the other hand, we face a little bit of trouble with this troubling problem solve the context you do not need any trouble feel free to send any data using context that is call or method context API</p>
                </div>
                <div className='blog'>
                    <h3>What is Semantic tag</h3><br />
                    <p>Semantic is behind the Html part this is creating a smooth Html component. If you need good UI opposite way you need to style or part your code of the component. Commonly use their kind of part into the semantic like 'header, nav, section, footer'.This is very impacting on every coder.</p>
                </div>
                <div className='blog'>
                 <h3>What is the different between inline-element <br />and inline-block element</h3>
                    <p>Those are the Html tag which is inline and inline-block.
                        initially inline don't use width and height. It shows Commonly line by line as far as having space for every element. On the other hand, inline-block varies width and height like blocks way.
                        Mostly you can identify inline as showing line by line or you can say row style opposite inline-block showing the data column by column. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;