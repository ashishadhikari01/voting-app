import React from "react"
import {Link} from "react-router-dom"

export default function SystemSideBar(){
    return (
        <>
         <div className="flex flex-col w-50 border-r border-gray-300 ml-27 min-h-screen">
         <Link to="/poll.com/home">Home</Link>
         <Link to="/poll.com/poll">Poll</Link>
         <Link to="/poll.com/about">About</Link>
         </div>
        </>
    )
}