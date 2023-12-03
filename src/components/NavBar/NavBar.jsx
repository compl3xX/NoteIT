import React from "react";
import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCreateNodeModal, toggleMenu } from "../../features";

import { FaPlus } from "react-icons/fa6";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(state => state.menu.isOpen)

  const { pathname } = useLocation();

  let hidden = true;

  if (pathname === "/archive" || pathname === "/trash") hidden = false;

  return (
    <div className="NavBar">
      <button onClick={() => { dispatch(toggleMenu(isOpen)) }} className="ToggleBtn" > Toggle</button>
      {
        hidden && (
          <button
            style={{ minWidth: "80px", width: "15%" }}
            onClick={() => {
              dispatch(toggleCreateNodeModal(true));
            }}
          >
            <FaPlus />
            Create
          </button>
        )
      }
    </div >
  );
};

export default NavBar;
