import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Header = ({ className }) => {
  const { currUser } = useContext(AuthContext);
  return (
    <nav className={className}>
      <h4>CRUD-20</h4>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
      <h4> {currUser?.displayName}</h4>
    </nav>
  );
};

export default Header;
