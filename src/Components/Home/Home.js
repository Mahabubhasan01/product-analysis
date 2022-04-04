import { useNavigate } from "react-router-dom";
import CustomHook from "../../CustomHook/CustomHook";
import Comment from "./Comment/Comment";
import img from "./flower.jpg";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = CustomHook();
  const threeComment = blogs.slice(0, 3);
  const naviGate = useNavigate();

  return (
    <div className="home">
      <div className="local-home">
        <div>
          <h1>
            <span>
              A sign of beauty, A symbol of grace.
               Its pride runs strong At a very fast pace!
            </span>
          </h1>
          <p>
            Flowers are a gift to this earth. As Gerard De Nerval once said,
            “Every flower is a soul blossoming in nature.” They paint
            contrasting colors along the ground and bring joy to many. Their
            elegance and delicate touches have us all in awe and exhilaration.
            This is often why flowers are seen as loving gifts for the special
            people in our lives, and the reaction of the person receiving the
            flowers is priceless.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="flower">
          <img className="flower-img" src={img} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h1>Customer Reviews (3)</h1>
        <div className="comment reviews">
          {threeComment.map((comment) => (
            <Comment key={comment.id} comment={comment}></Comment>
          ))}
        </div>
        </div>
        <div>
          <button onClick={() => naviGate("/Reviews")} className="btn">
            <p className="btn-text">See All Reviews</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
