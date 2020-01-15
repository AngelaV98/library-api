import React from "react";

import { NavLink } from "react-router-dom";

function ToolbarLink({ children, ...rest }) {
  return (
    <NavLink {...rest} activeClassName="mdc-tab--active" className="mdc-tab">
      {children}
    </NavLink>
  );
}

export default ToolbarLink;