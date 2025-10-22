import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function LandingLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-slate-800"><Outlet /></main>
      </div>
    </>
  );
}
