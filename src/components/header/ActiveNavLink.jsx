import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function ActiveNavLink({ to, children }) {
  const location = useLocation();

  const isActive = () => {
    return location.pathname === to;
  };

  return (
    <NavLink
      to={to}
      className={isActive() ? "text-blue" : ""}>
      {children}
    </NavLink>
  );
}

export default ActiveNavLink;
