import { XIcon } from "../icons/logo"
import { ProfileIcon } from "../icons/profile"
import { Search } from "../icons/search"
import { SideButtonC } from "./sidebarbtn"
import { HomeIcon } from "../icons/homeIcon"
import { LogOutIcon } from "../icons/logoutIcon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export const SearchBar=()=>{
  const [data,setdata]=useState([]);
  const navigate=useNavigate();
  function logout(){
     localStorage.removeItem("token");
      navigate("/SignIn")
  }
  const userInfo=async()=>{
          
    const response=await axios.get("http://localhost:4000/user/myInfo",{
        headers:{
            "token":localStorage.getItem("token")
        }
      }) 
      setdata(response.data.findUser)   
}
useEffect(()=>{
    userInfo();
},[])

  
      const navigateToProfile=async()=>{
        console.log(data)
          navigate("/Profile",{state:data})     
  
      }

    return <div className="h-screen w-96 bg-black border-r-2">
     
      <div className="w-48 flex justify-center mb-4">
           <XIcon size={20}/>
      </div>
          <div className="flex flex-col flex-between">
          <div className="ml-20 ">
            <div  className="w-48" onClick={()=>{navigate("/Home")}}><SideButtonC width={"48"} height={"12"}  Icon={<HomeIcon/>} text={"Home"}/></div>
             <div className="w-48" onClick={navigateToProfile}><SideButtonC width={"48"} height={"12"} Icon={<ProfileIcon/>} text={"Profile"} /></div>
             <SideButtonC width={"48"} height={"12"}  Icon={<Search/>} text={"Explore"}/>
           </div>
           <div onClick={logout} className="ml-20 w-48">
           <SideButtonC width={"48"} height={"12"}  Icon={<LogOutIcon/>} text={"LogOut"}/>
           </div>
          </div>
      
    </div>
}