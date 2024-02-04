 import {useSelector} from "react-redux"
 import {Link} from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect,useState } from "react";
function Cart(){

    const {cart} =useSelector((state)=>state)
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
     setTotalAmount(cart.reduce((acc,curr)=>acc +curr.price,0));
    },[cart])
    return (
        <div className="flex ">
            {
                cart.length>0 ?(<div className=""  >
                    <div >
                        {
                            cart.map((item,index)=>{
                                return <div className=""><CartItem  key={item.id} item={item} itemIndex={index}></CartItem></div>
                            })
                        }
                    </div>
                    <div className="my-[-550px] mx-[900px]  w-[500px]">
                        <div>
                            <div className="font-semibold text-xl text-green-700">
                                Your Cart
                            </div>
                            <div className="font-semibold text-5xl text-green-700">Summary</div>
                            <p className="mt-5"><span className="text-gray-700 font-semibold text-xl mt-[20px]">Total Items :{cart.length}</span></p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-semibold text-xl mt-[20px]">Total Amount: ${totalAmount}</p>
                            <button className=" rounded-md mt-6 w-[300px] text-white text-xl h-[60px] bg-green-700 text-center">Checkout Now</button>
                        </div>
                    </div>

                </div>):
                (<div className="flex flex-col items-center justify-center mx-auto mt-[200px]">
                    <h1 className="text-gray-700 font-semibold text-xl">Your cart is empty !</h1>
                    <Link to="/"><button className="rounded-md mt-6 w-[150px] text-white text-xl h-[45px] bg-green-700 text-center">Shop Now</button></Link>
                </div>)
            } 
        </div>
    )
}
export default Cart