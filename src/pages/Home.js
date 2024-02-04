import {useEffect, useState} from "react"
import Spinner from "../components/Spinner"
import Product from "../components/Product"
function Home(){

    const API_URL="https://fakestoreapi.com/products"
    const [loading,setLoading]=useState(false);
    const [post,setPost]=useState([])

    async function fetchProductData(){
        setLoading(true)
        console.log("hello");
        try{
                const result= await fetch(API_URL);

                const data=await result.json();
                setPost(data);
        }
        catch(error){
            console.log("DATA NOT FETCHED");
            setPost([])
        }
        setLoading(false);
    }
  useEffect(()=>{
    fetchProductData();
  },[])
           console.log(post.length)
    return (
        <div>
           {
            loading?<Spinner></Spinner>:
            post.length >0?( <div className="flex flex-wrap">
                {
                    post.map((pos)=>{
                        return <Product key={pos.id} pos={pos}></Product>
                    })
                }
            </div>):
            <div>No Data Found</div>
           }
        </div>
    )
}

export default Home