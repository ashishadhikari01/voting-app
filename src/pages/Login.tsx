import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  type UserDatatType = {
    email: string;
    password: string;
  };
  const [userdata, setUserData] = useState<UserDatatType>({
    email: "",
    password: "",
  });
  const [formFeedback, setFormFeedback] = useState<string>("");
  const [requestFeedback, setRequestFeedback] = useState<string>("");
  const toTheSystem = useNavigate();
  function handleData(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function validate(userdata: UserDatatType) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let key in userdata) {
      let typedKey = key as keyof UserDatatType;
      if (userdata[typedKey].trim() === "") {
        setFormFeedback(`${key} is empty`);
        return false;
      }
    }
    if (!emailRegex.test(userdata.email)) {
      setFormFeedback("Invalid email format");
      return false;
    } else if (userdata.password.length < 6) {
      setFormFeedback("Insufficient password length");
      return false;
    } else {
      setFormFeedback("");
      return true;
    }
  }
  function SignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(userdata)
    let isValidate = validate(userdata);
    if (!isValidate) return;
    axios
      .post("http://localhost:8000/user/login", userdata, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("yeah loginedd");
        setRequestFeedback(res.data.message);
        setUserData({ email: "", password: "" });
        setTimeout(() => {
          setRequestFeedback("Redirecting....");
        }, 1500);
        if (res.data.message === "Login sucessfully") {
          setTimeout(() => {
            toTheSystem("/poll.com/home");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("error on login", err);
        setRequestFeedback(err.response.data.message);
      });
  }
  return (
    <>
      <div className="flex gap-x-10 text-white mx-auto w-[85%]">
        <div className="">
          <img src="/loginImg.png" width={600} height={900} />
        </div>
        <div className="flex flex-col mt-20">
          <form className="text-white w-90" onSubmit={SignIn} noValidate>
            <p className="text-2xl font-semibold bg-slate-600 p-2 mb-8">
              LogIn
            </p>
            <p className="text-xl mb-2">Email</p>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={userdata.email}
              onChange={handleData}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userdata.password}
              onChange={handleData}
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
              <p className="text-lg text-red-500 italic">{formFeedback}</p>
              <p className="text-lg italic text-stone-300">{requestFeedback}</p>
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
