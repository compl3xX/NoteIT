import React from "react";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateNodeModal } from "../../features";
import { FaPlus } from "react-icons/fa6";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  let hidden = true;

  if (pathname === "/archive" || pathname === "/trash") hidden = false;

  return (
    <div className="NavBar">
      {hidden && (
        <button
          style={{ minWidth: "80px", width: "15%" }}
          onClick={() => {
            dispatch(toggleCreateNodeModal(true));
          }}
        >
          <FaPlus />
          Create
        </button>
      )}
    </div>
  );
};

export default NavBar;
