import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Changed initial state to false

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar`}>
        <div className="nav--Logo">
          <img src={Logo} alt="SpaceEdutech" />
        </div>
        <div className={`nav--link ${isOpen ? "opened" : "closed"}`}>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/internship">
            Internship
          </Link>
          <Link className="Link" to="/masterclass">
            Masterclass
          </Link>
          <Link className="Link" to="/workshop">
            Workshop
          </Link>
        </div>
      </div>
      <div className={`${isOpen ? "sidebar" : "hambu"}`}>
        <div className="nav--Logo">
          <img src={Logo} alt="SpaceEdutech" />
        </div>
        <div className={`nav--link `}>
          <Link className="Link" to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className="Link" to="/internship" onClick={toggleMenu}>
            Internship
          </Link>
          <Link className="Link" to="/masterclass" onClick={toggleMenu}>
            Masterclass
          </Link>
          <Link className="Link" to="/workshop" onClick={toggleMenu}>
            Workshop
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Navbar;
