import './App.css'
import Layout from "./components/Layout"
import Button from "./components/Button"

function App() {

  return (
    <>
    <Layout/>
    <Button texto="Ver Ofertas" color="primary" />
    <Button texto="Comprar" color="secondary" />
    </>
  )
}

export default App