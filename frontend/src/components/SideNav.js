import "./SideNav.css";

const SideNav = ({ toggle }) => {
  const sideNavClass = ["sidenav"];

  if (toggle) {
    sideNavClass.push("toggle");
  }
  return <div className={sideNavClass.join(" ")}></div>;
};

export default SideNav;
