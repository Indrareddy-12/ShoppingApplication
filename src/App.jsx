import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"


function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Outlet/>
    </>
  )
}

export default App
