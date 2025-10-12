import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex gap-x-10 text-white mx-auto w-[85%]">
        <div className="">
          <img src="/loginImg.png" width={600} height={900}/>
        </div>
        <div className="flex flex-col mt-20">
          <form className="text-white w-90">
            <p className="text-2xl font-semibold bg-slate-600 p-2 mb-8">
              LogIn
            </p>
            <p className="text-xl mb-2">Email</p>
            <input
              type="text"
              placeholder="Enter Email"
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-1"
            />
            <div>
              Not a user?{" "}
              <Link
                to="/register"
                className="hover:underline transition duration-300 text-lg text-blue-600"
              >
                Register now
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                className="hover:underline transition duration-300 text-lg text-blue-600"
              >
                Forgot password?
              </Link>
            </div>
            <button className="border-2 w-40 p-2 bg-blue-600 rounded-xl cursor-pointer font-semibold mt-4 mb-10 hover:bg-blue-700 transition duration-300">
              LogIn
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
