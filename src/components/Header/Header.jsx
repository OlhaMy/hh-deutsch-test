import { Link } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";

import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <MdOutlineTaskAlt />
        <p>Learn Deutsch</p>
      </Link>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
