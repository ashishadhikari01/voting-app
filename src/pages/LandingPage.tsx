import React,{useState} from "react"
// import About from "./About"
import { useNavigate,Link } from "react-router-dom"

export default function LandingPage(){
    const toabout=useNavigate()
    function navigateToAbout(){
      toabout('./About')
    }
    return (
        <>
        <div className=" flex flex-row justify-center">
        <div className="">
            <img src="/hand-drawing-illustration-election-concept.png" width={600} height={400}/>
        </div>
        <div className="text-white flex flex-col justify-center">
            <h1 className="font-bold text-4xl">What does a Citizen Say?</h1>
            <p className="font-semibold italic text-2xl">A voting app which brings out what the public really wants</p>
            <div className="pt-7 flex flex-row gap-x-10">
            <Link to="/register" className="w-30 bg-[#015FC7] p-1 rounded-lg text-center font-semibold text-lg p-1 cursor-pointer transition duration-300 hover:bg-[#015FC7]/75 active:bg-[#015FC7]">REGISTER</Link>
            <button 
            className="w-30 bg-[#015FC7] p-1 rounded-lg text-center font-semibold text-lg p-1 cursor-pointer transition duration-300 hover:bg-[#015FC7]/75 active:bg-[#015FC7]"
            onClick={navigateToAbout}
            >READ MORE</button>
            </div>

        </div>
        </div>
        </>
    )
}
