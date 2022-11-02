import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import { MenuIcon, MoonIcon } from "../../assets/Icons/Icons";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setStickyNav(true);
      }
      if (window.scrollY < 400) {
        setStickyNav(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${stickyNav ? "sticky-active" : ""}`}>
      <div className="nav-center">
        {/* start left side */}
        <div className="nav-left">
          <h1>Hassiba.</h1>
        </div>
        {/* end left side */}

        {/* start right side */}
        <div className="nav-right">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#">home</a>
            </li>
            <li className="nav-link">
              <a href="#">about me</a>
            </li>
            <li className="nav-link">
              <a href="#">portfolio</a>
            </li>
            <li className="nav-link">
              <a href="#">contact</a>
            </li>
            <li>
              <button className="dark-mode">
                <MoonIcon />
              </button>
            </li>
          </ul>
        </div>
        {/* end right side */}

        <div className="small-size-nav">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </button>

          <div className={`nav-links-small-screen ${isOpen ? "active" : null}`}>
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#">home</a>
              </li>
              <li className="nav-link">
                <a href="#">about us</a>
              </li>
              <li className="nav-link">
                <a href="#">services</a>
              </li>
              <li className="nav-link">
                <a href="#">book now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
