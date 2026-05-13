import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import Logo from "./Logo"
import buyIcon from "../assets/Buy.svg"

const Header = () => {
  const [busca, setBusca] = useState("")
  const navigate = useNavigate()

  const handleBusca = () => {
    if (busca.trim()) navigate(`/produtos?q=${encodeURIComponent(busca.trim())}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleBusca()
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center gap-4 px-8 py-4">
        <Logo bg="branco" />
        <div className="flex flex-1 items-center border border-(--light-gray-2) rounded-sm overflow-hidden mx-4">
          <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} onKeyDown={handleKeyDown} placeholder="Pesquisar produto..." className="flex-1 px-4 py-2 outline-none text-(--dark-gray-2) bg-transparent"/>
          <button onClick={handleBusca} className="px-3 py-2 text-(--light-gray) hover:text-(--primary)transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cadastro" className="text-[16px] text-(--dark-gray-2) underline decoration-(--dark-gray-2) whitespace-nowrap">Cadastre-se</Link>
          <Link to="/login" className="flex items-center justify-center w-28.5 h-10 bg-(--primary) text-white text-[14px] font-bold rounded-sm whitespace-nowrap">Entrar</Link>
        </div>
        <div className="ml-2">
          <img src={buyIcon} alt="carrinho" />
        </div>
      </div>
      <nav className="px-8 pb-3 flex gap-6">
        {[
          { to: "/", label: "Home" },
          { to: "/produtos", label: "Produtos" },
          { to: "/categorias", label: "Categorias" },
          { to: "/meus-pedidos", label: "Meus Pedidos" },
        ].map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `text-(--dark-gray-2) text-[15px] pb-1 transition-all ${isActive ? "border-b-2 border-(--primary) text-(--primary)font-semibold" : "hover:text-(--primary)"}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header