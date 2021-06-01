import Card from "../components/Card";
import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import Slider from "../components/ImageSlider/Slider";

import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <container className="container">
      <Header />
      <div className="homescreen">
        <h2 className="homescreen__title">Latest Artwork</h2>
        <HorizontalLine />
        <div className="homescreen__paintings">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="homescreen__slider">
          <div className="featured__products">Featured Products</div>
          <Slider />
        </div>
      </div>
    </container>
  );
};

export default HomeScreen;
