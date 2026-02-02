import { useContext } from "react";
import Products from "../Components/Products";
import { StoreContext } from "../StoreContex/StoreContex";

function Cart() {
  const { cartProducts, setCartProducts } = useContext(StoreContext);
  const renderCartProducts = cartProducts;
  console.log(renderCartProducts);
  return (
    <>
      {cartProducts.length === 0 ? (
        <div>
          <h3 className="font-bold text-center  font-serif text-blue-700 mt-50 text-3xl">
            Your cart is Empty
          </h3>
        </div>
      ) : (
        <div>
            <h2 className="font-bold mx-1 text-amber-600 text-3xl ">
                Cart Products
            </h2>

        <div className="grid grid-cols-5  flex-wrap gap-4">
        
          {cartProducts &&
            renderCartProducts.map((product) => (
                <Products
                key={product.id}
                deleteText="remove Product"
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
                text="buy Now"
                product={product}
                />
            ))}
        </div>
            </div>
      )}
    </>
  );
}

export default Cart;
