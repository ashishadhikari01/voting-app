import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"


export default function Register() {
  type UserDetailType={
    firstname:string
    lastname:string
    email:string
    gender:string
    password:string
    confirmPassword:string
  }
  const [userDetail, setUserDetail] = useState<UserDetailType>({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  })
  const [errorFeedback,setErrorFeedback]=useState("")
  const [registerFeedback,setRegisterFeedback]=useState("")
  const toLogin=useNavigate()

  function handleUserDetail(event:React.ChangeEvent<HTMLInputElement>) {
    const {name,value} = event.target;
    setUserDetail((prev)=>{
      return{
     ...prev,
      [name]:value
      }
    })
  }

  function validateUser(userDetail:UserDetailType){
    const stringRegex=/^[A-Za-z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   for(let key in userDetail){ 
    const typedKey= key as keyof UserDetailType
    if(userDetail[typedKey].trim()===""){
      setErrorFeedback(`${key} is empty`)
      return false 
    }
   }
  if(!stringRegex.test(userDetail.firstname)){
     setErrorFeedback("firstname should only letter")
     return false
  }
  else if(!stringRegex.test(userDetail.lastname)){
    setErrorFeedback("lastname should only letter")
    return false
  }
  else if (!emailRegex.test(userDetail.email.trim())) {
  setErrorFeedback("Invalid email format")
  return false;
}
  else if(userDetail.password.length<6){
    setErrorFeedback("password should be more than 6 character")
    return false
  }
  else if(userDetail.password!==userDetail.confirmPassword){
    setErrorFeedback("password & confirm password doesnot match")
  }
  else{
    setErrorFeedback("")
    return true
    
  }
  }

  async function registerUser(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
   let isValidate=validateUser(userDetail)
   if(!isValidate) return
   axios.post('http://localhost:8000/user/register',{
    firstname:userDetail.firstname,
    lastname:userDetail.lastname,
    email:userDetail.email,
    gender:userDetail.gender,
    password:userDetail.confirmPassword
   })
   .then((res)=>{
    setRegisterFeedback(res.data.message)
    setUserDetail({firstname:"",lastname:"",email:"",gender:"",password:"",confirmPassword:""})
    setTimeout(()=>{
     navigateToLogin()
    },2000)
   })
   .catch((err)=>{
    setErrorFeedback('Error on registering user')
    // console.log('error on register user', err.message())
   })
  }

  setTimeout(()=>{
  setRegisterFeedback("")
  },1500)

  function navigateToLogin():void{
    toLogin('/login')
  }
  
  console.log(userDetail)
  return (
    <>
      <div className="flex gap-x-30 text-white mx-auto w-[80%] ">
        <div className="">
          <img src="/FigureReg.png" width={392} height={600} />
        </div>
        <div className="flex flex-col">
          <form className="text-white w-90" onSubmit={registerUser} noValidate>
            <p className="text-xl mb-2">FirstName</p>
            <input
              type="text"
              placeholder="Enter FirstName"
              name="firstname"
              value={userDetail.firstname}
              onChange={handleUserDetail}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">LastName</p>
            <input
              type="text"
              placeholder="Enter LastName"
              name="lastname"
              value={userDetail.lastname}
              onChange={handleUserDetail}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">Email</p>
            <input
              type="text"
              placeholder="Enter EmailAddress"
              name="email"
              value={userDetail.email}
              onChange={handleUserDetail}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">Gender</p>
            <div className="flex gap-x-7 mb-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userDetail.gender==='male'}
                  onChange={handleUserDetail}
                  className="scale-150 mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userDetail.gender==='female'}
                  onChange={handleUserDetail}
                  className="scale-150 mr-2"
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  checked={userDetail.gender==='others'}
                  onChange={handleUserDetail}
                  className="scale-150 mr-2"
                />
                Others
              </label>
            </div>
            <p className="text-xl mb-2">Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userDetail.password}
              onChange={handleUserDetail}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-4"
            />
            <p className="text-xl mb-2">Confirm Password</p>
            <input
              type="password"
              placeholder="Enter confirmed password"
              name="confirmPassword"
              value={userDetail.confirmPassword}
              onChange={handleUserDetail}
              className="border-3  border-white p-2 rounded-xl outline-none w-[100%] mb-1"
            />
            <div>
              <Link
                to="/login"
                className="hover:underline transition duration-300 text-lg text-blue-600"
              >
                already have an account?
              </Link>
            </div>
            <p className="text-lg text-red-500 italic">{errorFeedback}</p>
            <p className="text-lg text-green-500 italic">{registerFeedback}</p>
            <button 
            className="border-2 w-40 p-2 bg-blue-600 rounded-xl cursor-pointer font-semibold mt-4 mb-10 hover:bg-blue-700 transition duration-300"
            type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
