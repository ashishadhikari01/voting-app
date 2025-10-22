import React, { useState } from "react";
// import SystemAboutHeader from "../components/SystemAboutHeader"
import SystemAboutHeader from "../components/SystemAboutHeader";
import BasicInformation from "../components/BasicInformation";
import MoreInformation from "../components/MoreInformation";
import ProfilePicture from "../components/ProfilePicture";

export default function SystemAboutAccountInfo() {
  const [uiTrack, setUiTrack] = useState({
    basicInformation: false,
    moreInformation: false,
    ProfilePicture:false 
  });
   
  
  // function onClickbasicInformation() {
  //   setUiTrack((prev) => {
  //     return {
  //       ...prev,
  //       basicInformation: !uiTrack.basicInformation,
  //     };
  //   });
  // }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="">
          <SystemAboutHeader />
        </div>

        <div className="mt-5">
          <div
            className="mt-1 p-4 flex justify-between hover:bg-gray-100 transition duration-400 cursor-pointer"
            onClick={() =>
              setUiTrack((prev) => {
                return {
                  ...prev,
                  basicInformation: !uiTrack.basicInformation,
                };
              })
            }
          >
            <div className="flex gap-x-10">
              <div className="flex items-center">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/information--v1.png"
                  alt="information--v1"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>Basic information</p>
                <p className="text-gray-500 text-sm">
                  See your account basic information like name, password and so
                  on.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src={`${
                  uiTrack.basicInformation
                    ? "https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                    : "https://img.icons8.com/ios-glyphs/30/chevron-down.png"
                }`}
                alt="chevron-down"
              />
            </div>
          </div>
          <div className={`${uiTrack.basicInformation ? "block" : "hidden"}`}>
            <BasicInformation />
          </div>

          {/* second ui */}
          <div
            className="mt-1 p-4 flex justify-between hover:bg-gray-100 transition duration-400 cursor-pointer"
            onClick={() =>
              setUiTrack((prev) => {
                return {
                  ...prev,
                  moreInformation: !uiTrack.moreInformation,
                };
              })
            }
          >
            <div className="flex gap-x-10">
              <div className="flex items-center">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/more.png"
                  alt="more"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>More information</p>
                <p className="text-gray-500 text-sm">
                  See your account detail information like username, location
                  and so on.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src={`${
                  uiTrack.moreInformation
                    ? "https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                    : "https://img.icons8.com/ios-glyphs/30/chevron-down.png"
                }`}
                alt="chevron-down"
              />
            </div>
          </div>
          <div className={`${uiTrack.moreInformation ? "block" : "hidden"}`}>
            <MoreInformation />
          </div>

          {/* third ui */}
          <div 
            className="mt-1 p-4 flex justify-between hover:bg-gray-100 transition duration-400 cursor-pointer"
            onClick={() =>
              setUiTrack((prev) => {
                return {
                  ...prev,
                  ProfilePicture: !uiTrack.ProfilePicture,
                };
              })
            }
          >
            <div className="flex gap-x-10">
              <div className="flex items-center">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                  alt="user-male-circle--v1"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p>Profile Picture</p>
                <p className="text-gray-500 text-sm">
                  Update your profile picture with beautiful picture
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <img
                width="30"
                height="30"
                src={`${
                  uiTrack.moreInformation
                    ? "https://img.icons8.com/ios-glyphs/30/chevron-up.png"
                    : "https://img.icons8.com/ios-glyphs/30/chevron-down.png"
                }`}
                alt="chevron-down"
              />
            </div>
          </div>
          <div className={`${uiTrack.ProfilePicture ? "block" : "hidden"}`}>
            <ProfilePicture/>
          </div>

        </div>
      </div>
    </>
  );
}
