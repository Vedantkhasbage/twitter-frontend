import { CreatePost } from "../components/createPost"
import { SearchBar } from "../components/sidebar"
import { Suggest } from "../components/suggest"
import { useEffect, useState } from "react"
import axios from 'axios'
import { RenderPost } from "../components/renderpost"
import { ForYouUsers } from "../components/foryou"

export const Home=()=>{
    const [suggested,setsuggested]=useState([]);
    const [forYou,setforYou]=useState(true)
    const [following,setfollowing]=useState(false)
    const [allpost,setallpost]=useState([]);


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
},[])
function foryoufn(){
    setforYou(true)
    setfollowing(false)
}
function followingfn(){
    setforYou(false)
    setfollowing(true)
}





           
const GetAllPost=async()=>{
    
    const response=await axios.get("http://localhost:4000/post/allpost",{
        headers:{
            "token":localStorage.getItem("token")
        }
    })
    setallpost(response.data.message)
}
useEffect(()=>{
GetAllPost()
},[])





    return <div className="h-screen flex w-full bg-black">
        <SearchBar/>
             <div className="flex flex-col">

            
                <div className="flex h-20 bg-green-400 border-b-2 border-l-2 border-r-2">
                    <div onClick={foryoufn} className="w-[350px] flex justify-center cursor-pointer items-center hover:bg-gray-900 bg-black">
                        <h1 className="font-semibold text-xl text-white">For you</h1>
                    </div>
                    <div onClick={followingfn} className="w-[350px] flex justify-center cursor-pointer items-center hover:bg-gray-900 bg-black">
                        <h1 className="font-semibold text-xl text-white ">Following</h1>
                    </div>
                  </div>
               <CreatePost/>
                  {forYou && <div className="h-full overflow-y-auto overflow-x-hidden w-[700px]">
                   {
                    allpost.map((items)=>
                        <ForYouUsers props={items}/>
                    )
                   }

                  </div>  }
                  {following && <div className="h-full w-[700px] bg-green-400"></div> }

            </div>
            
             <div className="h-96 ml-4 mt-4 rounded-2xl w-80 border-2">
                {
                    suggested.map((users)=> 
                        <Suggest props={users}/>
                    )
                }
             </div>   
            
            {/* <Suggest /> */}
           

    </div>
}