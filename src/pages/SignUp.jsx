import { ButtonC } from "../components/Button"
import { XIcon } from "../icons/logo"
import { InputC } from "../components/Input"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SignUp=()=>{
    const FisrtNameRef=useRef();
    const EmailRef=useRef();
    const PasswordRef=useRef();
    const navigate=useNavigate();

   async function handlesubmit(){
        const firstname=FisrtNameRef.current.value;
        const email=EmailRef.current.value;
        const password=PasswordRef.current.value;

        if(email==="" || password==="" || firstname==="" || email.length<5 || password.length<5 || firstname.length<5){
          alert("Please Enter Valid Details!!")
          return;
        }
      
       else{ const response=await axios.post("http://localhost:4000/user/signUp",{
            firstname:firstname,
            email:email,
            password:password
        })
        console.log()
        navigate("/SignIn")
}
    }

    return <div className=" h-screen w-full flex bg-black ">
      <div className="h-screen w-1/2 flex items-center justify-center">
      <XIcon size={96}/>
      </div>
      
      <div className="h-screen w-1/2 flex flex-col justify-center items-center">

       
        <div className="h-[500px] w-[400px] rounded-xl border-2">
          <div className="mt-4">
          <div className="w-[400px] flex justify-center">
            <h1 className="text-3xl text-white">Register</h1>
           </div>

            <div className="mt-12">
            <div  className="mt-6">
              <InputC ref={FisrtNameRef} placeholder={"Enter Your FisrtName"} height={"12"} width={"w-[400px]"}/>
              </div>

              <div  className="mt-6">
              <InputC ref={EmailRef} placeholder={"Enter Your Email"} height={"12"} width={"w-[400px]"}/>
              </div>

              <div  className="mt-6">
              <InputC ref={PasswordRef} placeholder={"Enter Your Password"} height={"12"} width={"w-[400px]"}/>
              </div>

             <div onClick={handlesubmit} className="mt-16">
             <ButtonC color={"blue"} width={"full"} text={"Register"} height={12}/>
             </div>

             <h1 className="text-white">Already Have an Account? <span onClick={()=>{navigate("/SignIn")}} className="cursor-pointer text-blue-900">Click Here</span></h1>
            </div>
          </div>
        </div>

      </div>
      
    </div>
}