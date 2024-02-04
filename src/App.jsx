import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
const App = () => {
  return(
    <div className="flex flex-col  h-screen overflow-x-hidden">
     <div className="bg-slate-900">
      <Navbar></Navbar>
     </div>
     
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
};

export default App;
