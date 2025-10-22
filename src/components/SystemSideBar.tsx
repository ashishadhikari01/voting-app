import React from "react";
import { Link } from "react-router-dom";

export default function SystemSideBar() {
  return (
    <>
      <div className="flex flex-col gap-y-3 w-50 border-r-1 border-gray-300 ml-27 min-h-screen pt-7">

        <div className="flex cursor-pointer">
          <Link
            to="/poll.com/home"
            className="flex gap-x-4 hover:bg-gray-300 px-3 py-2 hover:rounded-2xl items-center"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/home--v1.png"
              alt="home--v1"
            />
            <p className="text-xl">Home</p>
          </Link>
        </div>

        <div className="flex cursor-pointer">
          <Link
            to="/poll.com/poll"
            className="flex gap-x-4 hover:bg-gray-300 px-3 py-2 hover:rounded-2xl items-center"
          >
            <img width="30" height="30" src="https://img.icons8.com/windows/32/poll-vertical.png" alt="poll-vertical"/>
            <p className="text-xl">Poll</p>
          </Link>
        </div>

        <div className="flex cursor-pointer">
          <Link
            to="/poll.com/profile"
            className="flex gap-x-4 hover:bg-gray-300 px-3 py-2 hover:rounded-2xl items-center"
          >
            <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/user.png" alt="user"/>
            <p className="text-xl">Profile</p>
          </Link>
        </div>
      </div>
    </>
  );
}
