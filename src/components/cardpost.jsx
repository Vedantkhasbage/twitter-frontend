import { useNavigate } from "react-router-dom";


export const Card=({props})=>{ 
        console.log(props)

    return <div className="bg-black border-2 mt-4 min-h-[500px] w-[700px]">

          <div className="flex props-center border-2 w-full cursor-pointer items-center">
           
         <h1 className="text-white ml-4">{props.title}</h1>
            
          </div>
          <div className="mt-4">
         <img className="object-cover rounded-2xl h-96 ml-4 w-[600px]" src={props.img} alt="" />
          </div>
    </div>
}