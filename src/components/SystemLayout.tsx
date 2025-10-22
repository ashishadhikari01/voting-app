import React from "react";
import SystemSideBar from "./SystemSideBar";
import { Outlet } from "react-router-dom";

export default function SystemLayout() {
  return (
    <>
      <div className="flex">
        <div className="fixed top-0 left-0 h-screen"><SystemSideBar/></div>
        <div className="ml-77 flex flex-row w-[100%] border-red-500"><Outlet /></div>
      </div>
    </>
  );
}
