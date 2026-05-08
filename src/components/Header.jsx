import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import Logo from "./Logo"

const Header = () => {
  const [busca, setBusca] = useState("")
  const navigate = useNavigate()

  const handleBusca = () => {
    if (busca.trim()) navigate(`/products?q=${encodeURIComponent(busca.trim())}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleBusca()
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center gap-4 px-8 py-4">
        <Logo bg="branco" />
        <div className="flex flex-1 items-center border border-[var(--light-gray-2)] rounded-sm overflow-hidden mx-4">
          <input type="text" value={busca} onChange={(e) => setBusca(e.target.value)} onKeyDown={handleKeyDown} placeholder="Pesquisar..." className="flex-1 px-4 py-2 outline-none text-[var(--dark-gray-2)] bg-transparent"/>
          <button onClick={handleBusca} className="px-3 py-2 text-[var(--light-gray)] hover:text-[var(--primary)] transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cadastro" className="text-[16px] text-[var(--dark-gray-2)] underline decoration-[var(--dark-gray-2)] whitespace-nowrap">Cadastre-se</Link>
          <Link to="/login" className="flex items-center justify-center w-[114px] h-[40px] bg-[var(--primary)] text-white text-[14px] font-bold rounded-[4px] whitespace-nowrap">Entrar</Link>
        </div>
        <div className="ml-2 text-[var(--dark-gray-2)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
          </svg>
        </div>
      </div>
      <nav className="px-8 pb-3 flex gap-6">
        {[
          { to: "/", label: "Home" },
          { to: "/produtos", label: "Produtos" },
          { to: "/categorias", label: "Categorias" },
          { to: "/meus-pedidos", label: "Meus Pedidos" },
        ].map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `text-[var(--dark-gray-2)] text-[15px] pb-1 transition-all ${isActive ? "border-b-2 border-[var(--primary)] text-[var(--primary)] font-semibold" : "hover:text-[var(--primary)]"}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header