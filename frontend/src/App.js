import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";

//Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideNav from "./components/SideNav";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setToggle(true)} />
      <SideNav toggle={toggle} click={() => setToggle(false)} />
      <Backdrop toggle={toggle} click={() => setToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/contact" component={ContactScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
