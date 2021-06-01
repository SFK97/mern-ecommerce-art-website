import "./Painting.css";
import { Link } from "react-router-dom";

const Painting = () => {
  return (
    <Link to={`/product/${3333}`} className="painting">
      <div className="painting__wrap">
        <img
          src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="painting name"
        />
        <div className="painting__overlay">
          <p className="painting__description">
            A beautiful mixture of blue and purple presented in a wonderful
            pattern, depicting a galaxy
          </p>
        </div>
      </div>

      <div className="painting__info">
        <p className="painting__name">Painting 1</p>
        <p className="painting__price">£299</p>
      </div>
    </Link>
  );
};

export default Painting;
