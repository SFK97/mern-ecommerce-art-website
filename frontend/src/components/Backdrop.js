import "./Backdrop.css";

const Backdrop = ({ toggle, click }) => {
  return toggle && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
