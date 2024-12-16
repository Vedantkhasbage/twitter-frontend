import { useEffect, useRef, useState } from "react"
import { ButtonC } from "./Button"
import { InputC } from "./Input"
import axios from 'axios'
import { SideButtonC } from "./sidebarbtn"
import { SendIcon } from "../icons/send"
import { ImagePost } from "../icons/imagepost"
import { useNavigate } from "react-router-dom"

export const CreatePost=()=>{
    const contentref=useRef();
    const imgageRef=useRef();
    const [userProfile,setuserProfile]=useState(null)
    const [data,setdata]=useState([]);
    const navigate=useNavigate();

    const navigateToProfile=async()=>{
        navigate("/Profile",{state:data})     

    }

    const userInfo=async()=>{
          
        const response=await axios.get("http://localhost:4000/user/myInfo",{
            headers:{
                "token":localStorage.getItem("token")
            }
          }) 
          setdata(response.data.findUser)
          setuserProfile(response.data.findUser.profileImg);
        
          
    }
    useEffect(()=>{
        userInfo();
    },[])


   async function postimg(){
    const data=new FormData();
   if((contentref.current.value==="" && imgageRef.current.files[0]==="undefined") || (contentref.current.value==="")){
    alert("Post Can't be Empty!!!")
    return;
   }else{
    data.append("title",contentref.current.value);
    data.append("img",imgageRef.current.files[0]);
      const response=await axios.post("http://localhost:4000/post/create",data,{
      headers:{
        "Content-Type": "multipart/form-data", 
        "token":localStorage.getItem("token")
    }}
)}
   }

    return <div className="w-[700px] h-44 border-b-2">
        <div className=" flex justify-center mt-4">
        <div onClick={navigateToProfile} className="h-12 w-[50px] mr-4 cursor-pointer">
           <img className="h-12 rounded-full w-[50px] object-cover" src={userProfile} alt="" />
        </div>
        <InputC ref={contentref} height={12} width={"w-[600px]"} placeholder={"Write Your Post..."}/>
        </div>
       
       <div className="mt-4 flex justify-between">
      <div className="flex">
      <label  className="cursor-pointer w-8 h-8 ml-4">
       <input className="bg-green-400 w-48 hidden" ref={imgageRef} type="file" />
        <ImagePost/>
       </label>
      </div>

       <div onClick={postimg} className="w-24 rounded-2xl justify-between h-[37px] mr-16 cursor-pointer hover:bg-gray-900 bg-gray-600 flex items-center">
         <h1 className="ml-4 text-white font-semibold">Post</h1>
         <div className="mr-4">
         <SendIcon/>
         </div>
       </div>
       </div>
    
    </div>
}