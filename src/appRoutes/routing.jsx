import { BrowserRouter,Route,Routes } from "react-router-dom"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Home } from "../pages/home"
import { Profile } from "../components/Profile"
import { Edit } from "../pages/edit"

export const Routing=()=>{

    return <div>
      <Routes>
   <Route path="/SignIn" element={<SignIn/>}/>
   <Route path="/" element={<Home/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
   <Route path="/Home" element={<Home/>}/>
   <Route path="/Profile" element={<Profile/>}/>
   <Route path="/EditProfile" element={<Edit/>}/>

      </Routes>
    </div>
}