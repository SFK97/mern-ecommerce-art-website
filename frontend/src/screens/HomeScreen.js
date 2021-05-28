import Card from "../components/Card";
import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import Painting from "../components/Painting";
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
        </div>
      </div>
    </container>
  );
};

export default HomeScreen;
