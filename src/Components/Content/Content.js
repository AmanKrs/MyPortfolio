import React from "react";
import Sideview from "../Sideview/Sideview";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div>
      <div className="main-container">
        <div className="sidenav-container">
          <Sideview />
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
