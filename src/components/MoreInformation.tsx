import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MoreInformation() {
  type MoreInfo = {
    birthdate: string;
    phone: string;
    location: string;
    bio: string;
    website: string;
  };
  const [moreInformation, setMoreInformation] = useState<MoreInfo>({
    birthdate: "",
    phone: "",
    location: "",
    bio: "",
    website: "",
  });
  const [obtainedMoreInfo, setObtainedMoreInfo] =
    useState<Partial<MoreInfo> | null>(null);
  const [responseInfo, setResponseInfo] = useState<string>("");

  function handleMoreInfo(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setMoreInformation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  console.log(moreInformation);
  function validation(moreInformation: MoreInfo):true|false {
    const urlRegex =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;

    if (
      moreInformation.phone.trim() !== "" &&
      moreInformation.phone.length !== 10
    ) {
      setResponseInfo("Phone number must be of 10 digits and number format");
      return false
    } else if (moreInformation.website.trim() !== "" && !urlRegex.test(moreInformation.website)) {
      setResponseInfo("Invalid url format");
      return false;
    } else if (moreInformation.birthdate.trim() !== "" && !dateRegex.test(moreInformation.birthdate)) {
      setResponseInfo("Invalid date format");
      return false;
    } else {
      return true;
    }
  }
  function saveMoreInfo() {
    let isValid = validation(moreInformation);
    if (!isValid) {
      return;
    }
    axios
      .post("http://localhost:8000/user/updatemoreinfo", moreInformation, {
        withCredentials: true,
      })
      .then((res) => {
        setResponseInfo(res.data.message);
        console.log("saving user info", res);
      })
      .catch((err) => {
        console.log("error on", err);
      });
  }

  function updateMoreInfo() {
    if (Object.values(moreInformation).every((value) => value.trim() === "")) {
      setResponseInfo("All field are empty");
      return;
    }
    let isValid = validation(moreInformation);
    if(!isValid) return false
    if (isValid) {
      axios
        .put("http://localhost:8000/user/putmoreinfo", moreInformation, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("");
          console.log("updating user info", res);
          setResponseInfo(res.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 600);
        })
        .catch((err) => {
          console.log("error on updating more info", err);
        });
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/getmoreinfo", { withCredentials: true })
      .then((res) => {
        setObtainedMoreInfo(res.data);
        console.log("error on getting user more info", res);
      })
      .catch((err) => {
        console.log("error on getting user more info", err);
      });
    console.log("seee here too");
  }, []);

  return (
    <>
      <div className="w-[80%] mx-auto mt-4">
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          <div>
            <p>Birth Date</p>
            <input
              type="text"
              name="birthdate"
              value={moreInformation.birthdate || obtainedMoreInfo?.birthdate}
              onChange={handleMoreInfo}
              className="border w-80 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div>
            <p>Phone</p>
            <input
              type="text"
              name="phone"
              value={moreInformation.phone || obtainedMoreInfo?.phone}
              onChange={handleMoreInfo}
              className="border w-80 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div>
            <p>Location</p>
            <input
              type="text"
              name="location"
              value={moreInformation.location || obtainedMoreInfo?.location}
              onChange={handleMoreInfo}
              className="border w-80 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div>
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              value={moreInformation.bio || obtainedMoreInfo?.bio}
              onChange={handleMoreInfo}
              className="border w-80 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div>
            <p>Website</p>
            <input
              type="text"
              name="website"
              value={moreInformation.website || obtainedMoreInfo?.website}
              onChange={handleMoreInfo}
              className="border w-80 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-5">
        <p className="italic text-lg text-red-600">{responseInfo}</p>
        <button
          className="bg-blue-500 w-30 p-2 rounded-xl text-white font-semibold cursor-pointer hover:scale-95 transition duration-400 active:scale-100"
          onClick={saveMoreInfo}
        >
          Save
        </button>
        <button
          className="bg-blue-500 w-30 p-2 rounded-xl text-white font-semibold cursor-pointer hover:scale-95 transition duration-400 active:scale-100 ml-5"
          onClick={updateMoreInfo}
        >
          Update
        </button>
      </div>
    </>
  );
}
