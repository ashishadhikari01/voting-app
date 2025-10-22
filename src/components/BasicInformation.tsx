import React, { useEffect, useState } from "react";
import axios from "axios";
import type { userType } from "./SystemAboutHeader";

type EditUserData={
    firstname?:string
    lastname?:string
    gender?:string
    email?:string
}
export default function BasicInformation() {
  const [userBasicData, setBasicUserData] = useState<userType | null>(null);
  const [editUserData, setEditUserData]=useState<EditUserData>({firstname:'',lastname:'',gender:'',email:''})
  useEffect(() => {
    axios
      .get("http://localhost:8000/user/info", { withCredentials: true })
      .then((res) => {
        setBasicUserData(res.data);
      })
      .catch((err) => {
        console.log("error on getting user detail", err);
      });
  }, []);

  function handleBasicData(event:React.ChangeEvent<HTMLInputElement>){
      const {type,name,value}=event.target
        setEditUserData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    function updateBasicInfo(){
        axios.put('http://localhost:8000/user/updatebasicinfo',editUserData,{
            withCredentials:true 
        })
       .then((res)=>{
        console.log('updating info',res)
        setTimeout(()=>{
        window.location.reload()
        },500)
       })
       .catch((err)=>{
        console.log('error on updating info',err)
       })
    }

//   console.log(userBasicData);
  console.log(editUserData)
  return (
    <>
      <div className="w-[80%] mx-auto mt-4">
        <div className="flex justify-start gap-x-15 gap-y-4  flex-wrap ml-4">
          <div>
            <p className="text-lg">FirstName</p>
            <input
              type="text"
              value={editUserData.firstname ||userBasicData?.firstname}
              name="firstname"
              onChange={handleBasicData}
              className="border w-70 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div>
            <p className="text-lg">LastName</p>
            <input
              type="text"
              value={editUserData.lastname ||userBasicData?.lastname}
              name="lastname"
              onChange={handleBasicData}
              className="border w-70 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div>
            <p className="text-lg">Email</p>
            <input
              type="text"
              value={editUserData.email||userBasicData?.email}
              name="email"
              onChange={handleBasicData}
              className="border w-70 p-1 rounded-xl outline-none border-2 border-gray-400 hover:bg-gray-50"
            />
          </div>
          <div className="ml-2 mt-4">
            <p className="text-lg">Gender</p>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={editUserData.gender==='male'}
                onChange={handleBasicData}
                className="scale-140 mr-2"
              />
              Male
            </label>
            <label className=" ml-3 mr-3">
              <input
                type="radio"
                name='gender'
                value="female"
                checked={editUserData.gender==='female'}
                onChange={handleBasicData}
                className="scale-140 mr-2"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value= "others"
                onChange={handleBasicData}
                checked={editUserData.gender==='others'}
                className="scale-140 mr-2"
              />
              Others
            </label>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-5">
        <button 
        className="ml-4 bg-blue-500 w-30 p-2 rounded-xl text-white font-semibold cursor-pointer hover:scale-95 transition duration-400 active:scale-100"
        onClick={updateBasicInfo}
        >
          Update
        </button>
      </div>
    </>
  );
}
