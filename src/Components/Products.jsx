import { StoreContext } from "../StoreContex/StoreContex";

const Products = ({
  product,
  setCartProducts,
  text,
  deleteText,
  cartProducts,
}) => {
  function handleDelete(productId) {
    const copyCart = [...cartProducts];
    const updatedCart = copyCart.filter((item) => item.id !== productId);
    setCartProducts(updatedCart);
  }
  return (
    <>
      <div className=" m-3 flex flex-col flex-wrap items-center p-3 rounded-lg w-60">
        <img
          className="h-40 object-contain hover:scale-110    transition-transform: duration-700 "
          src={product.image}
          alt={product.title}
        />
        <h1 className="line-clamp-1 font-semibold">{product.title}</h1>
        <h3 className="text-red-700 font-semibold">price $:{product.price}</h3>
        <button
          onClick={() => setCartProducts((prev) => [...prev, product])}
          className="bg-amber-700 active:scale-x-75 hover:cursor-pointer text-white px-3 p-1.5  hover:bg-orange-800 rounded"
        >
          {text}
        </button>
        {deleteText && (
          <button
            onClick={() => {
              handleDelete(product.id);
            }}
            className="bg-amber-700 active:scale-x-75 text-white px-3 my-2  hover:bg-green-700 rounded"
          >
            {deleteText}
          </button>
        )}
      </div>
    </>
  );
};

export default Products;
