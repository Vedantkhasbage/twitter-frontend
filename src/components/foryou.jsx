import { useNavigate } from "react-router-dom";


export const ForYouUsers=({props})=>{
  console.log("here")
  console.log(props)

  const navigate=useNavigate();

  const navigateToProfile=async()=>{
      navigate("/Profile",{state:props.userId})     
  }

    return <div className="bg-black border-2 min-h-[500px] w-[700px]">

          <div className="flex props-center border-2 w-full cursor-pointer items-center">
            <div className="mt-4 ml-4 h-12 w-12">
        <img onClick={navigateToProfile}c className="h-12 w-12 object-cover rounded-full" src={props.userId.profileImg} alt="" />
            </div>
            <div className="ml-2">
            <h1 onClick={navigateToProfile} className="font-semibold text-white mt-4">{props.userId.firstname}</h1>
            </div>
          </div>
          <div className="mt-4">
         <img className="object-cover rounded-2xl h-96 ml-4 w-[600px]" src={props.img} alt="" />
          </div>
         <h1 className="text-white ml-4">{props.title}</h1>
    </div>
}