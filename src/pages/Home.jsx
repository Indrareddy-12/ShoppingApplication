import { useContext } from "react";
import Products from "../Components/Products";
import { StoreContext } from "../StoreContex/StoreContex";

const Home = () => {

  const { products, setCartProducts,cartProducts } = useContext(StoreContext);
  console.log(`cart Ids ${cartProducts}`)
  const cartsCopy=[...cartProducts]
  return (
    <>
   <div className="grid grid-cols-4 gap-2">
     {products.map((product)=>(
        <Products key={product.id} text="Add to cart" cartProducts={cartsCopy} product={product} setCartProducts={setCartProducts}/>
     ))}
   </div>
        </>
   
  )
};

export default Home
