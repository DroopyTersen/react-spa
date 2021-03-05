import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  let { pathname } = useLocation();
  let sections = pathname.split("/");
  let breadcrumbs = sections.reduce((crumbs, section, index) => {
    if (index === 0) {
      crumbs.push({ to: "/", text: "home" });
    } else {
      let prev = crumbs[index - 1];
      crumbs.push({
        text: section,
        to: prev.to + "/" + section,
      });
    }
    return crumbs;
  }, []);
  console.log("🚀 | Breadcrumb | sections", sections, pathname);
  return (
    <ul className="breadcrumb">
      {breadcrumbs.slice(0, breadcrumbs.length - 1).map((crumb) => (
        <li className="breadcrumb-item">
          <Link to={crumb.to}>{crumb.text}</Link>
        </li>
      ))}
      <li className="breadcrumb-item text-bold">{breadcrumbs[breadcrumbs.length - 1]?.text}</li>
    </ul>
  );
}

export default React.memo(Breadcrumb);
