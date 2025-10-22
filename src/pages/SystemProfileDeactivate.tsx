import React, { useState } from "react";
import SystemAboutHeader from "../components/SystemAboutHeader";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function SystemProfileDeactivate() {
  const [password, setPassword] = useState<string>("");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const toLogin=useNavigate()
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPassword(value);
  }

  function deactiveAccount() {
    if (password.trim().length < 6) {
      setResponseMsg("password is too short");
      return;
    }
    axios.put("http://localhost:8000/user/deactiveaccount",
      { password: password },
      { withCredentials: true }
    )
    .then((res)=>{
      setResponseMsg(res.data.message)
      if(res.data.message==='account deactivating...'){
       setTimeout(()=>{
        console.log('ufff')
       localStorage.removeItem("token")
       toLogin("/login")
      },1500)
      }
      console.log('deactivating account response',res)
    })
    .catch((err)=>{
      console.log('error on deactiving user account',err)
    })
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
              <p className="text-2xl font-semibold">Deactivate your account</p>
            </div>
          </div>

          <div className="pl-30 pb-3 border-b border-gray-300">
            <p className="text-gray-400">
              Complete your deactivation request by entering the password
              associated with your account.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            {/* <p >Complete your deactivation request by entering the password associated with your account.</p> */}
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="password"
              className="w-90 p-2 border-2 border-gray-400 outline-none rounded-sm focus:bg-gray-50"
            />
            {/* <div className="mt-3 border-b border-gray-300 w-full"></div> */}
            <p className="italic text-gray-500 mt-3">{responseMsg}</p>
            <div className="flex justify-end w-[40%]">
              <button
                className=" mt-5 bg-red-500 p-2 rounded-xl text-white cursor-pointer hover:bg-red-600 transition duration-300 active:scale-95"
                onClick={deactiveAccount}
              >
                Deactivate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
