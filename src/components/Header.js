import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex header">
      <Link to="/">Profily</Link>
    </div>
  );
};

export default Header;
