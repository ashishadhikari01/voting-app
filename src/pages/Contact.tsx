import React, { useState } from "react";
import {Link, Navigate, useNavigation} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
// import { Register } from "./Register";
// import Login from "./Login";

export default function Contact() {
  // const toLogin=useNavigate()
  // function navigateToLogin(){
  //   toLogin('./Login')
  // }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center text-white">
          <form className="mt-10">
            <h1 className="font-semibold text-3xl">Quick Feedback</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-100 mt-5 p-3 rounded-xl border-3 outline-none bg-slate-700 "
            />
            <div className="mt-7">
              <textarea
                rows={7}
                cols={47}
                className="border-3 rounded-xl p-2 outline-none"
                placeholder="Leave your message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="w-30 p-2 mt-3 bg-[#015FC7] border-3 cursor-pointer font-semibold hover:bg-[#015FC7]/75 transition duration-200 active:bg-[#015FC7]">
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="border-t-7 border-white mt-10">
        <div className="mx-auto w-[75%] flex flex-row">
          <div className="text-white border-r-4 pr-10">
            <div className="">
              <p className="font-bold text-xl text-blue-600 ">Contact:</p>
              <p className="text-lg font-semibold">+977-9843333333</p>
              <p className="text-lg font-semibold">+977-9870777777</p>
            </div>
            <div className="mt-5">
              <p className="font-bold text-xl text-blue-600 ">Email:</p>
              <p className="text-lg font-semibold">adhikaryashish005@gmail.com</p>
              <p className="text-lg font-semibold">whatcitizensays@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-20 pl-10 border-r-4 pr-10 border-white ">
            <div className="flex flex-col">
              <p className="font-bold text-xl text-blue-600 underline">GetIn</p>
              <Link to="/" className="text-white text-lg font-semibold mt-3 hover:underline">Home</Link> 
              <Link to="/register" className="text-white text-lg font-semibold mt-1 hover:underline">Register</Link>
              <Link to="/login" className="text-white text-lg font-semibold mt-1 hover:underline">Login</Link>
            </div>
            <div>
              <p className="font-bold text-xl text-blue-600 underline mb-3">Know More</p>
              <Link to='/about' className="text-white text-lg font-semibold hover:underline">About</Link>
            </div>
            <div className="flex flex-col text-white">
              <p className="font-bold text-xl text-blue-600 underline mb-3">Follow Us</p>
              <a href="https://www.facebook.com/adhikariashish11" target="_blank" className="text-white text-lg font-semibold hover:underline" >Facebook</a>
              <a href="https://www.linkedin.com/in/ashishadhikari11/" target="_blank" className="text-white text-lg font-semibold mt-1 hover:underline">Linkedin</a>
              <a href="https://x.com/adhikaryashish3" target="_blank" className="text-white text-lg font-semibold mt-1 hover:underline">Twitter(X)</a>
            </div>
            
          </div>
          <div className="flex flex-col text-white pl-5">
            <p className="font-bold text-lg mt-1 ml-3">&#169; What Citizen says?</p>
            <p className="font-semibold mt-1 ml-3 text-lg">Developer Info:</p>
            <p className="text-white text-lg font-semibold mt-1 ml-3">Built from scratch 🖥️ by <span><a href="https://ashishadhikari11.com.np/" target="_blank" className=" hover:underline">Ashish</a></span></p>
          </div>
          </div>
          {/* <div>
            <p>see</p>
          </div> */}
          </div>
        </div>
    </>
  );
}
