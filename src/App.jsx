import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useContext } from "react"
import { StoreContext } from "./StoreContex/StoreContex"


function App() {
  const {setProducts}=useContext(StoreContext)

  return (
    <>
     <Header setProducts={setProducts} />
     <Outlet/>
    </>
  )
}

export default App
