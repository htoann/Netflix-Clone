import {
  Search,
  NotificationsRounded,
  ArrowDropDown,
  ArrowDropUp,
  AccountCircleOutlined,
  HelpOutlineOutlined,
  EditOutlined,
} from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/apiCalls";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    return () => (window.onscroll = null);
  });

  const handleLogout = (e) => {
    logout(dispatch);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="flex justify-between px-14">
        <div className="left flex py-5 items-center">
          <Link to="/">
            <img
              className="w-24 mr-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </Link>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/series">
            <span>TV Shows</span>
          </Link>
          <Link to="/movies">
            <span>Movies</span>
          </Link>
          <Link to="/popular">
            <span>New & Popular</span>
          </Link>
          <Link to="/">
            <span>My List</span>
          </Link>
        </div>
        <div className="right flex items-center text-right">
          <div className={isActive ? "active search-box" : "search-box"}>
            <span className="search-box__icon">
              <Search onClick={() => setIsActive((isActive) => !isActive)} />
            </span>
            <input
              className="search-box__input"
              placeholder="Movies, TV shows"
            ></input>
          </div>
          <span>Kids</span>
          <span>
            <NotificationsRounded />
          </span>

          <div className="profile flex">
            <img
              className="ml-5 h-8 rounded"
              src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM5PrJX0TiFgfm4HOoS76PWmofnZtjwSQQj-dPSEdzfCr8p8wNhjBwMybzmLIAGotByD810aYhO6nG8N8FMUoXG-sg.png?r=abe"
              alt=""
            />
            <ArrowDropDown className="mt-1" />
            <div className="options">
              <ArrowDropUp className="profile-dropup" />
              <span>
                <EditOutlined className="icon" />
                Manage Profile
              </span>
              <hr />
              <span>
                <AccountCircleOutlined className="icon" />
                Account
              </span>
              <span>
                <HelpOutlineOutlined className="icon" />
                Help Center
              </span>
              <hr />
              <span onClick={handleLogout}>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
