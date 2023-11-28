import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../navigation";
import "./navbar.css";

import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  //show responsive nav
  const navbarRef: any = useRef(null);
  const navbarResRef: any = useRef(null);

  function showNav() {
    navbarRef.current.classList.toggle("inactive");
    navbarResRef.current.classList.toggle("active");
  }

  useEffect(() => {
    const handleClick = () => {
      navbarResRef.current.classList.remove("active");
    };

    navbarResRef.current.addEventListener("click", handleClick);

    return () => {
      navbarResRef.current.removeEventListener("click", handleClick);
    };
  }, []);

  //active nav styles
  const active = {
    color: "goldenrod",
  };
  return (
    <div className="nav-wrapper">
      <div className="inner-nav-wrapper">
        {/*logo*/}
        <div className="logo">
          <img
            src="https://dcs.ug.edu.gh/img/comScience_logo.png"
            className="logo-img"
            alt="logo"
          />
        </div>

        {/*nav links*/}
        <div className="nav" ref={navbarRef}>
          {navigation.map((nav) => {
            return (
              <NavLink
                key={nav.name}
                style={({ isActive }) => (isActive ? active : null)}
                className="nav-links"
                to={nav.href}
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>
        <div className="nav-responsive" ref={navbarResRef}>
          {navigation.map((nav) => {
            return (
              <NavLink
                key={nav.name}
                style={({ isActive }) => (isActive ? active : null)}
                className="nav-links"
                to={nav.href}
              >
                {nav.name}
              </NavLink>
            );
          })}
        </div>

        {/*nav toggler*/}
        <div className="toggle-menu" onClick={showNav}>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
