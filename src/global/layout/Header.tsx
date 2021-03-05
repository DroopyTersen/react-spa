import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-section">
        <Link to="/" className="app-logo text-bold mr-2 text-large">
          Your App
        </Link>
      </div>

      <nav className="navbar-section">
        <NavLink to="/movies">MOVIES</NavLink>
        <NavLink to="/actors">ACTORS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>
    </header>
  );
}

const checkIsActive = (link: string, path: string) => {
  return path.toLowerCase().startsWith(link.toLowerCase());
};

function NavLink({ to, children }) {
  let { pathname } = useLocation();
  let isActive = checkIsActive(to, pathname);
  let cssClass = ["btn", "btn-link", "ml-2", isActive ? "text-bold" : ""].join(" ");
  return (
    <Link to={to} className={cssClass}>
      {children}
    </Link>
  );
}

export default React.memo(Header);
