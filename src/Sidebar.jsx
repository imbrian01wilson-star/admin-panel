import { useState } from "react";
import adminPic from "./assets/todolist.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ menu }) {
  console.log(menu);

  const [active, setActive] = useState(1);
  return (
    <>
      <div className={`sidebar-body ${menu ? "" : "active-menu"}`}>
        <ul className="sidebar-list">
          <li className="img-li">
            <img className="sidebar-img" src={adminPic} alt="admin-pic" />
          </li>
          <li
            id="1"
            className={`sidebar-list-li ${active === 1 ? "active" : ""}`}
          >
            <Link onClick={() => setActive(1)} to="/users">
              کاربران
            </Link>
          </li>
          <li
            id="2"
            className={`sidebar-list-li ${active === 2 ? "active" : ""}`}
          >
            <Link onClick={() => setActive(2)} to="/posts">
              پست ها
            </Link>
          </li>
          <li
            id="3"
            className={`sidebar-list-li ${active === 3 ? "active" : ""}`}
          >
            <Link onClick={() => setActive(3)} to="/gallery">
              گالری
            </Link>
          </li>
          <li
            id="4"
            className={`sidebar-list-li ${active === 4 ? "active" : ""}`}
          >
            <Link onClick={() => setActive(4)} to="/todos">
              کارها
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sidebar;
