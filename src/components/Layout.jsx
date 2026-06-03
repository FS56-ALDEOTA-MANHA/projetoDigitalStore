import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import HomePage from "../pages/HomePage"
import ProductViewPage from "../pages/ProductViewPage"
import ProductListingPage from "../pages/ProductListingPage"
import NotFound from "../pages/NotFound"
import LoginPage from "../pages/LoginPage"
import { AuthProvider } from "../context/AuthContext"

const Layout = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Layout
