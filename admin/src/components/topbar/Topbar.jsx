import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Netflix Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM5PrJX0TiFgfm4HOoS76PWmofnZtjwSQQj-dPSEdzfCr8p8wNhjBwMybzmLIAGotByD810aYhO6nG8N8FMUoXG-sg.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
