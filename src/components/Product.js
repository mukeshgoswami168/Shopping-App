import { useDispatch, useSelector } from "react-redux"
import {add,remove}  from "../redux/Slices/CartSlice"
import {toast} from "react-hot-toast"

function Product({pos}){
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(add(pos));
         toast.success("Item Added to Cart")
    }
    const removeFromCart=()=>{
        dispatch(remove(pos.id));
         toast.success("Remove from Cart")
    }

  
    return (
        <div className="flex flex-col items-center justify-between w-[300px] h-[400px]
        hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-[100px]  rounded-xl outline">
              <div><p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{pos.title}</p></div>
              <div><p className="w-40 text-gray-400 font-normal text-[10px] text-left">{pos.description.substring(0,50)}...</p></div>
              <div className="h-[180px]"><img src={`${pos.image}`} className="w-[120px]"></img></div>
             <div className="flex justify-between gap-12 items-center w-full mt-5"><div><p className="text-green-600 font-semibold">${pos.price}</p></div>
              {
                cart.some((p)=> p.id===pos.id)? <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in" onClick={()=>removeFromCart()}>Remove from Cart</button >:<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in" onClick={()=>addToCart()}>Add to cart</button>
              }
              </div>
        </div>
    )
}
export default Product