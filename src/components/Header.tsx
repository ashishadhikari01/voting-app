import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <nav className="flex justify-end gap-x-10 pr-20 text-2xl h-20 items-center bg-slate-800 text-[#FFFFFF] font-semibold">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="w-30 bg-[#015FC7] p-1 rounded-lg text-center items-center justify-center flex ">Login</Link>
      </nav>
    </>
  );
}
