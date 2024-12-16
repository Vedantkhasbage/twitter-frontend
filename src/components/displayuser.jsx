import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ForYouUsers } from "./foryou";
import { Card } from "./cardpost";

export const DisplayUser=({props})=>{
  // console.log(props)
  const navigate=useNavigate();
   const [currentId,setcurrentId]=useState("")
   const [post,setpost]=useState([])

  const userPost=async()=>{
     const response=await axios.get("http://localhost:4000/post/mypost",{
      headers:{
        "token":localStorage.getItem("token"),
        "user":props._id
      }
     })
  
     setpost(response.data.response)
     console.log(response.data.response)
  }


  const userInfo=async()=>{
          
    const response=await axios.get("http://localhost:4000/user/myInfo",{
        headers:{
            "token":localStorage.getItem("token")
        }
      }) 
    setcurrentId(response.data.findUser._id);
}
useEffect(()=>{
    userInfo();
    userPost();
},[])

    return <div>
        <div className="h-96 w-full flex justify-center">
        <div className="h-96 w-96 bg-black border-2  rounded-2xl mt-4">
    <div className="h-44 w-full flex justify-center">
      <img className="rounded-full" src={props.profileImg} alt="" />
    </div>
      
      <div className="h-32 w-full mt-4">
      <h1 className=" ml-4 text-white text-2xl font-semibold">
        {props.firstname}
      </h1>
      <h1 className="text-white ml-4">Join From :{props.createdAt}</h1>
      <p className="text-white ml-4">Bio: {props.Bio}</p>
      <div className="flex mt-4">
        <h1 className="text-white ml-4">{props.followers.length} Followers</h1>
        <h1 className="text-white ml-4">{props.following.length} Following</h1>
      </div>

    {currentId===props._id ? <button onClick={()=>navigate("/EditProfile")} className="h-8 rounded-3xl mt-4 ml-2 w-24 bg-gray-800 text-white font-semibold">Edit Profile</button> :""}
      </div>


    

    </div>
        </div>

    <div className="h-96 overflow-y-auto overflow-x-hidden w-[700px]">


{post.map((items)=>
         <Card props={items}/>    )}
         </div>
        
    </div>

}