import "./slideData";
import slideData from "./slideData";

const Dots = (props) => {
  return (
    <div className="dots">
      {slideData.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(event) => props.onClick((event.target.value = index))}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
