import "./slideData";
import slideData from "./slideData";

const Content = (props) => {
  return (
    <section>
      {slideData.map((slide, index) => (
        <div className={index === props.activeIndex ? "active" : "inactive"}>
          <img className="slide__image" src={slide.urls} alt="" />
          <h1 className="slide__title">{slide.title}</h1>
          <p className="slide__text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Content;
