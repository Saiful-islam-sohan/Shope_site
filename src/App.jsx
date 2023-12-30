import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Shop from '../src/page/Shop'
import ShopeCategory from '../src/page/ShopeCategory'
import Product from '../src/page/Product'
import Cart from '../src/page/Cart'
import LoginPage from '../src/page/LoginPage'




function App() {


  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/mens" element={<ShopeCategory category="men"></ShopeCategory>}></Route>
        <Route path="/women" element={<ShopeCategory category="women"></ShopeCategory>}></Route>
        <Route path="/kids" element={<ShopeCategory category="kids"></ShopeCategory>}></Route>
        <Route path="/product" element={<Product></Product>}>
          <Route path=":productId" element={<Product></Product>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>


      </Routes>

    </>
  )
}

export default App
