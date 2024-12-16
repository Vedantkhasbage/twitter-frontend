import { ButtonC } from "../components/Button"
import { XIcon } from "../icons/logo"
import { InputC } from "../components/Input"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn=()=>{

    const EmailRef=useRef();
    const PasswordRef=useRef();
    const navigate=useNavigate();

   async function handlesubmit(){
        const email=EmailRef.current.value;
        const password=PasswordRef.current.value;
        if(email==="" || password==="" || email.length<5 || password.length<5){
          alert("Please Enter Valid Details!!")
          return;
        }
      else{
        const response=await axios.post("http://localhost:4000/user/signIn",{
            email:email,
            password:password
        })

        if(response.message==="User not found"){
          alert("User Not Found!!!")
          return;
        }
       else{ console.log(response)
        localStorage.setItem("token",response.data.token)
        navigate("/Home")}
      }
    }

    return <div className=" h-screen w-full flex bg-black ">
      <div className="h-screen w-1/2 flex items-center justify-center">
      <XIcon size={96}/>
      </div>
      
      <div className="h-screen w-1/2 flex justify-center items-center">
       
        <div className="h-[500px] w-[400px] rounded-xl border-2">
          <div className="mt-8">
          <div className="w-[400px] flex justify-center">
            <h1 className="text-3xl text-white">Sign In</h1>
           </div>

            <div className="mt-12">
              <div className="mt-6">
              <InputC ref={EmailRef} placeholder={"Enter Your Email"} height={"12"} width={"w-[400px]"}/>
              </div>

              <div className="mt-6">
              <InputC ref={PasswordRef} placeholder={"Enter Your Password"} height={"12"} width={"w-[400px]"}/>
              </div>

             <div onClick={handlesubmit} className="mt-16">
             <ButtonC color={"blue"} width={"full"} text={"Sign In"} height={12}/>
             </div>

             <h1 className="text-white">Don't Have an Account? <span onClick={()=>{navigate("/SignUp")}} className="cursor-pointer text-blue-900">Click Here</span></h1>

            </div>
          </div>
        </div>

      </div>
      
    </div>
}