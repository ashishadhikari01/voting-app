import React,{useState,useEffect} from "react"
import axios from 'axios'

export type userType = {
  id: string;
  firstname: string;
  lastname: string;
  gender: "male" | "female" | "others";
  email: string;
  password: string;
};

export default function SystemAboutHeader(){
  const [userData, setUserData] = useState<userType | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/info", {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data);
        console.log("user information", res);
      })
      .catch((err) => {
        console.log("error on getting user information", err);
      });
  }, []);
    return (
        <>
        {/* <div className=""> */}
        <div className="flex justify-between text-end border-b border-gray-200 mr-3 mt-3 pb-3">
          <div className="ml-3 border-2 border-gray-300 rounded-3xl p-2 flex items-center">
            <img src="/icons8-profile-picture-64.png" width={80} height={80} />
          </div>
          <div className="">
            <p className="text-2xl font-semibold">
              {userData?.firstname + " " + userData?.lastname}
            </p>
            <p className="px-1 bg-gray-50 text-sm italic cursor-pointer">
              {userData?.email}
            </p>
            <p
              className={`inline-block px-4 rounded-xl italic text-lg cursor-pointer ${
                userData?.gender === "male" ? "bg-blue-200" : "bg-pink-200"
              }`}
            >
              {userData?.gender}
            </p>
          </div>
        </div>
        {/* </div> */}
        </>
    )
}