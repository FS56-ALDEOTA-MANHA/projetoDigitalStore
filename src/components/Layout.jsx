import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import HomePage from "../pages/HomePage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductViewPage from "../pages/ProductViewPage"

const Layout = () => {
  return (
    <div>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/produtos" element={<ProductListingPage/>}/>
            <Route path="/produto/:id" element={<ProductViewPage/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default Layout
