import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import System from "./pages/Sytem"
import LandingLayout from "./components/LandingLayout";
import SystemLayout from "./components/SystemLayout";
import SystemHome from "./pages/SystemHome";
import SystemPoll from "./pages/SystemPoll";
import SystemAbout from "./pages/SystemAbout";
import SystemAboutAccountInfo from "./pages/SystemAboutAccountInfo";
import SystemProfilePassword from "./pages/SystemProfilePassword"
import SystemProfileDeactivate from "./pages/SystemProfileDeactivate";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/poll.com" element={<SystemLayout />}>
            <Route path="home" element={<SystemHome />} />
            <Route path="poll" element={<SystemPoll />} />

            <Route path="profile" element={<SystemAbout />}/>
             <Route path="profile/accountinfo" element={<SystemAboutAccountInfo />} />
             <Route path="profile/password" element={<SystemProfilePassword/>}/>
             <Route path="profile/deactivate" element={<SystemProfileDeactivate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://www.figma.com/design/25kkLKI3Qsztcop084Xwqu/Online-Voting-System--Community-?node-id=4-16&t=eNyhJMQVHavWjz0k-0
