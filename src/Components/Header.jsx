import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { useContext } from "react";
import { StoreContext } from "../StoreContex/StoreContex";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const { products, allProducts, setProducts, cartProducts } =
    useContext(StoreContext);
  console.log(`Header Comp ${products.length}`);
  function filterProducts(userInput) {
    console.log(`user Entering ${userInput}`);
    if (userInput.trim() === "") {
      setProducts(allProducts);
      return;
    }
    const filterProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setProducts(filterProducts);
  }
  return (
    <>
      <div className="flex p-3 sticky top-0 shadow justify-between bg-yellow-400 w-full h-15">
        <img
          className=" cursor-pointer"
          src="https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png"
        />

        <input
          onChange={(e) => filterProducts(e.target.value)}
          className="border-b-blue-900 rounded-2xl p-4 w-2xl bg-white"
          type="text"
          placeholder="search Items"
        ></input>

        <nav className="">
          <Link to="/cart">
            <div className="relative inline-flex ">
              <div className="flex gap-4">
                <span className="text-3xl font-bold ">cart</span>
              </div>
              <ShoppingCart className="mx-3 sticky " size={40} />
              <span className="font-bold text-2xl text-red-700 ">
                {cartProducts ? cartProducts.length : 0}
              </span>
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Header;
