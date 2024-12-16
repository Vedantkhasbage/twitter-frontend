import { useRef } from "react"
import { InputC } from "../components/Input"
import { SearchBar } from "../components/sidebar"
import axios from "axios";

export const Edit=()=>{
    const NewNameRef=useRef();
    const CurrentPasswordRef=useRef();
    const NewPasswordRef=useRef();
    const NewEmailRef=useRef();
 
    const handlesubmit=async()=>{
       const response=await axios.post("http://localhost:4000/user/update",{
        newfirstname:NewNameRef.current.value,
        currentpassword:CurrentPasswordRef.current.value,
        newpassword:NewPasswordRef.current.value,
        newemail:NewEmailRef.current.value
       },
        {
        headers:{
            "token":localStorage.getItem("token")
        }
       })
    
      if(NewEmailRef.current.value!="" | CurrentPasswordRef.current.value!="" | NewPasswordRef.current.value!="" | NewEmailRef.current.value!="") 
        alert("Profile Update Successfully")
           }

    return <div className="flex">
         <SearchBar/>
         <div className="w-[700px] h-screen bg-green-500">
               <div className="mt-12">
                            
                            <div>
                            <InputC ref={NewNameRef} placeholder={"Change Your Name"} height={"12"} width={"w-[400px]"}/>  
                            </div>
                               
                            <div>
                            <InputC ref={NewEmailRef} placeholder={"Change Your Email"} height={"12"} width={"w-[400px]"}/>  
                            </div>
                            <div className="mt-6">
                            <InputC ref={CurrentPasswordRef} placeholder={"Enter Your Current Password"} height={"12"} width={"w-[400px]"}/>
                            </div>
              
                            <div className="mt-6">
                            <InputC ref={NewPasswordRef} placeholder={"Enter Your New Password"} height={"12"} width={"w-[400px]"}/>
                            </div>
              
                           <div className="mt-16">
                           <button onClick={handlesubmit} className="h-12 rounded-3xl mt-4 ml-2 w-32 bg-gray-800 text-white font-semibold">Update Profile</button>
                           </div>
              
              
                          </div>
         </div>
    </div>
}