import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

// Declarar um Componente para Prover o Contexto, passando como propriedade { children } e retornando a constante que foi atribuido o createContext como Componente.Provider: <Context.Provider value="">{children}</Context.Provider>

export const AuthProvider = ({children}) => {
  const userStorage = localStorage.getItem("usuario")
  const [user, setUser] = useState(userStorage)
  console.log(user)
  return (
    <>
      <AuthContext.Provider value={{user, setUser}}>
        {children}
      </AuthContext.Provider>
    </>
  )
} 