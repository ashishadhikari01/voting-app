import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import SystemAboutHeader from "../components/SystemAboutHeader";


export default function SystemAbout() {
  return (
    <>
      <div className="w-[100%] flex-col min-h-screen">
        <SystemAboutHeader />
        <Link to="/poll.com/profile/accountinfo" className="">
          <div className="mt-3 p-4 flex justify-between hover:bg-gray-100 transition duration-400">
            <div className="flex gap-x-10">
              <div className="flex items-center">
                <img
                  width="48"
                  height="48"
                  src="/icons8-account-96.png"
                  alt="user--v1"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>Account Information</p>
                <p className="text-gray-500 text-sm">
                  See you account information like your phone number and email
                  address.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
                alt="chevron-right"
              />
            </div>
          </div>
        </Link>

        {/*  */}
        <Link to="/poll.com/profile/password" className="">
          <div className="mt-1 p-4 flex justify-between hover:bg-gray-100 transition duration-400">
            <div className="flex gap-x-10">
              <div className="flex items-center">
               <img width="48" height="48" src="https://img.icons8.com/ios/50/key.png" alt="key"/>
              </div>
              <div className="flex flex-col justify-center">
                <p>Change your password</p>
                <p className="text-gray-500 text-sm">
                  Change your password at any time.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
                alt="chevron-right"
              />
            </div>
          </div>
        </Link>

        {/*  */}
        <Link to="/poll.com/profile/deactivate" className="">
          <div className="mt-1 p-4 flex justify-between hover:bg-gray-100 transition duration-400">
            <div className="flex gap-x-10">
              <div className="flex items-center">
               <img width="50" height="50" src="https://img.icons8.com/ios/50/--broken-heart--v1.png" alt="--broken-heart--v1"/>
              </div>
              <div className="flex flex-col justify-center">
                <p>Deactive your account</p>
                <p className="text-gray-500 text-sm">
                  Find out how you can deactivate your account.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
                alt="chevron-right"
              />
            </div>
          </div>
        </Link>
        
      </div>
    </>
  );
}
