import React from "react";
import SystemSideBar from "./SystemSideBar";
import { Outlet } from "react-router-dom";

export default function SystemLayout() {
  return (
    <>
      <div className="flex">
        <div><SystemSideBar/></div>
        <div><Outlet /></div>
      </div>
    </>
  );
}
