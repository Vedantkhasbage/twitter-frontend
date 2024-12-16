import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Suggest=({props})=>{

    const navigate=useNavigate();

    const navigateToProfile=async()=>{
        navigate("/Profile",{state:props})     

    }

    return <div onClick={navigateToProfile} className="bg-gray-700 h-[50px] w-64 flex items-center ml-8 mt-4 cursor-pointer rounded-xl hover:bg-gray-900">
        <img className="h-12 w-12 object-cover rounded-full" src={props.profileImg} alt="" />
        <h1 className=" text-white ml-4 font-semibold">{props.firstname}</h1>
    </div>
}