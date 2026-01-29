import { Link } from "react-router-dom"
const Header=()=>{
    return (
        <>
           <div className="flex p-3 justify-between bg-yellow-500 w-full h-15">
              <img src="https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png"/>
              <nav className="">
                <Link className=" font-bold text-2xl border px-4 rounded-2xl bg-amber-100  active:scale-90  hover:bg-amber-600" to="/cart" >Cart</Link>
              </nav>
           </div>
        </>
    )
}
export default Header