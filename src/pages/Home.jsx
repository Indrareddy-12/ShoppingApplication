import { useEffect, useState } from "react"

const Home=()=>{

    const [products,setProducts]=useState([])


        useEffect(()=>{

            const fetchProducts=async ()=>{
                
                const response=await fetch("https://fakestoreapi.com/products")
                const data= await response.json()
                console.log(data);
                setProducts(data)
                
            }
            fetchProducts()
            
        },[products])
    return(
        <>

   <div className="  my-5  flex-wrap w-screen  flex   gap-2  text-center ">
       {products.map((product)=>(
        <div className="border m-3 bg-amber-200 p-5 h-50">
           <img className="h-20 w-20 object-cover" src={product.image} ></img>
           <h1 className="truncate">{product.title.substring(0,10)}</h1>
           <button  className="border rounded font-bold  bg-amber-700" value={product}>Add To cart</button>
           </div>
        ))}
        </div>
        
        </>
    )

}
export default Home