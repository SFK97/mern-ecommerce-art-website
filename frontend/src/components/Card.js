import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <h2 className="card__title">Painting 1</h2>
        <p className="card__body">
          A beautiful mixture of blue and purple presented in a wonderful
          pattern, depicting a galaxy
        </p>
        <Link to={`/product/${3333}`} className="button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
