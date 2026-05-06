import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import HomePage from "../pages/HomePage"
import ProductViewPage from "../pages/ProductViewPage"
import ProductListingPage from "../pages/ProductListingPage"
import NotFound from "../pages/NotFound"

const Layout = () => {
  return (
    <div>
      <Header/>
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/produtos" element={<ProductListingPage/>}/>
         <Route path="/produto/:id" element={<ProductViewPage/>}/>
         <Route path="*" element={<NotFound/>} />
        </Routes>
       </BrowserRouter>   
      <Footer/>
    </div>
  )
}

export default Layout
