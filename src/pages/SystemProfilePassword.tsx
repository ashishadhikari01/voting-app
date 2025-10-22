import React, { useState } from "react";
import { Link } from "react-router-dom";
import SystemAboutHeader from "../components/SystemAboutHeader";
import axios from "axios";

export default function SystemProfilePassword() {
  type PasswordType = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  const [password, setPassword] = useState<PasswordType>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [responseMsg, setResponseMsg] = useState<string>("");

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPassword((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function validation(password: PasswordType): true | false {
    for (let key in password) {
      const typedKey = key as keyof PasswordType;
      if (password[typedKey].length < 6) {
        setResponseMsg(`${key} length is too short`);
        return false;
      }
    }
    if (password.currentPassword === password.newPassword) {
      setResponseMsg("current password and new password can't be same");
      return false;
    } else if (password.newPassword !== password.confirmPassword) {
      setResponseMsg("password and confirm password doesnot matches");
      return false;
    } else {
      setResponseMsg("");
      return true;
    }
  }

  function updatePassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let isValid = validation(password);
    if (!isValid) {
      return;
    }
    axios
      .put(
        "http://localhost:8000/user/updatePassword",
        { oldPassword: password.currentPassword,
          newPassword:password.confirmPassword

         },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setResponseMsg(res.data.message)
        console.log("password updating", res);
      })
      .catch((err) => {
        console.log("error on updating password", err);
      });
  }

  console.log(password);
  return (
    <>
      <div className="w-full">
        <div>
          <SystemAboutHeader />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-15 ml-5 mt-3">
            <Link
              to="/poll.com/profile"
              className="rounded-full cursor-pointer hover:bg-gray-100"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/left.png"
                alt="left"
              />
            </Link>
            <div className="flex items-center">
              <p className="text-2xl font-semibold">Change your password</p>
            </div>
          </div>

          <div className="flex  justify-center mt-4">
            <form
              className="flex flex-col"
              onSubmit={updatePassword}
              noValidate
            >
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePassword}
                className="w-90 p-2 border-2 border-gray-400 outline-none rounded-sm focus:bg-gray-50"
                placeholder="Current Password"
              />
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePassword}
                className="w-90 p-2 border-2 border-gray-400 outline-none rounded-sm focus:bg-gray-50 mt-10"
                placeholder="New Password"
              />
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePassword}
                className="w-90 p-2 border-2 border-gray-400 outline-none rounded-sm focus:bg-gray-50 mt-4"
                placeholder="Confirm Password"
              />
              <p className="italic text-gray-500 text-lg">{responseMsg}</p>
              <button
                className=" mt-5 block-inline cursor-pointer p-1 bg-blue-500 text-white text-lg font-semibold cursor-pointer rounded-lg hover:bg-blue-600 active:scale-97 transition duration-400"
                // onClick={updatePassword}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
