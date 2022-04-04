import React, { useState } from "react";
import CustomHook from "../../CustomHook/CustomHook";
import Comment from "./Comment/Comment";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = CustomHook();
  const threeComment = blogs.slice(0, 3);

  return (
    <div>
      <div className="local-home">
        <div>
          <h1>This is best</h1>
          <h1>
            <span>Choice your best</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            totam nesciunt nostrum dolores quae tenetur aliquid, cumque adipisci
            labore provident id reiciendis eius esse explicabo sunt autem
            reprehenderit ex cum fuga. Voluptas quidem aliquid nulla excepturi
            necessitatibus molestias itaque laboriosam?
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <h1>hello</h1>
          <img src="./flower.jpg" alt="" />
        </div>
      </div>
      <div className="comment">
      {threeComment.map((comment) => <Comment 
      comment={comment}
      ></Comment>)}
      </div>
    </div>
  );
};

export default Home;
