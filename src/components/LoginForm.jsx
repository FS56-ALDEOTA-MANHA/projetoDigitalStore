import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Button from "./Button"
import { useState } from "react"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const navigate = useNavigate()
  async function handleLogin (e) {
    e.preventDefault()
    console.log(email, senha)
      try {
        const response = await fetch("http://localhost:3000/usuarios")
        const dados = await response.json()
        console.log(dados)
      for (let i = 0; i < dados.length; i++) {
        if (dados[i].email === email && dados[i].senha === senha) {
          localStorage.setItem("usuario", dados[i].email)
          navigate("/")
        }
      }
      } catch (error) {
        console.error("Erro na requisição", error)
      }
    }

  return (
    <div className="bg-white w-full max-w-[560px] rounded-sm p-8 md:p-10 shadow-sm">
      <h1 className="text-4xl font-bold text-(--dark-gray) mb-5">Acesse sua conta</h1>

      <p className="text-(--dark-gray-2) mb-8">
        Novo cliente? Entao registre-se{" "}
        <Link to="/cadastro" className="underline">
          aqui
        </Link>
        .
      </p>

      <form onSubmit={(e)=> handleLogin(e)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="login" className="text-sm font-semibold text-(--dark-gray-2)">
            Login *
          </label>
          <input
            id="login"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            className="bg-(--light-gray-3) rounded-sm h-14 px-4 outline-none text-(--dark-gray-2) placeholder:text-(--light-gray)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="senha" className="text-sm font-semibold text-(--dark-gray-2)">
            Senha *
          </label>
          <input
            value={senha}
            onChange={(e)=> setSenha(e.target.value)}
            id="senha"
            type="password"
            placeholder="Insira sua senha"
            className="bg-(--light-gray-3) rounded-sm h-14 px-4 outline-none text-(--dark-gray-2) placeholder:text-(--light-gray)"
          />
        </div>

        <Link to="/recuperar-senha" className="text-(--dark-gray-2) underline w-fit">
          Esqueci minha senha
        </Link>

        <Button texto="Acessar Conta" />
      </form>

      <div className="flex flex-col items-center gap-4 mt-8">
        <p className="text-(--dark-gray-2)">Ou faça login com</p>
        <div className="flex items-center gap-5 text-2xl">
          <Link to="/login" aria-label="Entrar com Google">
            <FcGoogle />
          </Link>
          <Link to="/login" aria-label="Entrar com Facebook" className="text-[#1877F2]">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
