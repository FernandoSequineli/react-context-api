import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Page1</NavLink>
      <NavLink to="/page2">Page2</NavLink>
      <NavLink to="/page3">Page3</NavLink>
    </nav>
  );
};

export default Navbar;
