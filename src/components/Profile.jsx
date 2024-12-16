import { useEffect, useState } from "react"
import { SearchBar } from "./sidebar"
import { Suggest } from "./suggest"
import axios from "axios"
import { DisplayUser } from "./displayuser"
import { useLocation } from "react-router-dom"
import { ForYouUsers } from "./foryou"

export const Profile=()=>{
    const [suggested,setsuggested]=useState([])
    const [mypost,setmypost]=useState([])
    const location=useLocation();
    const data=location.state

    const CurrentUserPost=async()=>{
        const response=await axios.get("http://localhost:4000/post/mypost",{
            headers:{
                "token":localStorage.getItem("token")
            }
          }) 
        //   console.log(response.data)
    }
 
    const loadsuggestedusers=async()=>{
         
        const response=await axios.get("http://localhost:4000/user/suggest",{
          headers:{
              "token":localStorage.getItem("token")
          }
        }) 
        setsuggested(response.data.message)
  }

useEffect(()=>{
  loadsuggestedusers();
  CurrentUserPost();
},[])
   
    return <div className="flex bg-black">
        <SearchBar/>

       <div className="flex">
       <div className="w-[700px] h-full flex justify-center border-r-2">
            <DisplayUser props={data}/>
            {/* <ForYouUsers/> */}
        </div>
        <div className="h-96 ml-4 mt-4 rounded-2xl w-80 bg-black border-2">
                {
                    suggested.map((users)=> 
                        <Suggest props={users}/>
                    )
                }
             </div>  
       </div>
    </div>
}