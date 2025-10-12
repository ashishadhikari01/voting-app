import React, { useState } from "react";

export default function About() {
  return (
    <>
      <div className="pt-15 flex justify-center">
        <p className="text-2xl text-white w-200 text-justify border-l-7 rounded-3xl pl-5">
          Welcome to our web-based polling platform — a space designed to
          empower Nepalese citizens to voice their opinions and shape the
          nation’s future. Here, users can easily create and vote on polls
          across various categories such as politics, transparency, public
          service, transportation, national policy, and more. Our goal is to
          bring out what the public truly wants by providing a transparent and
          inclusive platform for open discussion and collective decision-making.
          Every poll is focused on issues that matter most to Nepalese citizens,
          helping promote good governance and informed policymaking. Join us in
          making Nepal more participatory, transparent, and responsive — one
          vote at a time.
        </p>
      </div>
    </>
  );
}
