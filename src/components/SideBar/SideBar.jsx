import "./SideBar.scss";

import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BiSolidArchive, BiSolidTrash } from "react-icons/bi";
import { FaNoteSticky } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import { toggleCreateTagModal } from "../../features";
import { FaRegEdit } from "react-icons/fa";
import logo from "../../assets/logo.png";

const navItems = [
  { icon: <BiSolidArchive />, title: "Archive", id: v4() },

  { icon: <BiSolidTrash />, title: "Trash", id: v4() },
];

const SideBar = () => {
  const tags = useSelector((state) => state.tag.tagList);

  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} />
      </div>
      <ul>
        <li>
          <NavLink to="/">
            <div className="sidebar-content-items">
              <FaNoteSticky />
              <span>Notes</span>
            </div>
          </NavLink>
        </li>

        {tags.map(({ tagName, id }) => (
          <li key={id}>
            <NavLink to={`/tag/${tagName}`}>
              <div className="sidebar-content-items">
                <AiFillTag />
                {tagName}
              </div>
            </NavLink>
          </li>
        ))}

        <li
          onClick={() => {
            dispatch(toggleCreateTagModal({ type: "edit", view: true }));
          }}
        >
          <div className="sidebar-content-items">
            <FaRegEdit />
            Edit Tags
          </div>
        </li>

        {navItems.map(({ icon, title, id }) => (
          <li key={id}>
            <NavLink to={`/${title.toLowerCase()}`}>
              <div className="sidebar-content-items">
                {icon}
                <span>{title}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
