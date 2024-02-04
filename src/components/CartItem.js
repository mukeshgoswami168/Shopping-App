import { FcDeleteDatabase } from "react-icons/fc";
import {remove} from "../redux/Slices/CartSlice"
import { MdDelete } from "react-icons/md";

import {toast} from "react-hot-toast"
import { useDispatch } from "react-redux";
function CartItem({item,itemIndex}){
    const dispatch=useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id));
         toast.success("Remove from Cart")
    }
    
    return(
        <div className="flex mt-[50px] py-[15px] mx-[50px] w-[700px] border-b-2  border-b-teal-950 h-[300px] ">
             <div className="flex gap-8">
                <div className="w-[180px] h-[100px] ml-[180px]">
                    <img src={item.image} ></img>
                </div>
                <div className="w-[300px]">
                    <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
                    <h1 className="mt-2  text-gray-500 ">{item.description.substring(0,90)}...</h1>
                    <div className="flex justify-between mt-3"><p className="text-green-600 p-2 font-semibold">${item.price}</p>
                    <div onClick={()=>removeFromCart()} className="w-10 flex rounded-full bg-pink-300 px-3  items-center"><MdDelete />

                      </div></div>
                </div>
             </div>
        </div>
    )
}
export default CartItem