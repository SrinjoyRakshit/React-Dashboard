import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import {
  ChatBubbleOutlineOutlined,
  FullscreenOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsActiveOutlined,
} from "@mui/icons-material";
import { Switch } from "@mui/material";
import { DarkModeContext } from "../../context/darkmodeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <Switch
              style={{ color: "#210876" }}
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlined className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="/assets/person.jpg" className="profileImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
