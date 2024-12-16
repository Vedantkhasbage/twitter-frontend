import { BrowserRouter } from "react-router-dom"
import { Routing } from "./appRoutes/routing"


function App() {

  return <div>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  </div>
  }

export default App
