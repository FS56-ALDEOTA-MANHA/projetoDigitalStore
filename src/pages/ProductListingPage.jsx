import { useState } from "react"

const ProductListingPage = () => {
  const [dados, setDados] = useState([])
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/produtos")
      const dados = await response.json()
      console.log(dados)
      setDados(dados)
    } catch (error) {
      console.error("Erro na requisição", error)
    }
  }

  fetchData()

  return (
    <div>
      {dados.map((produto) => (
        <div>
          {/* <img src="" alt="" /> */}
          <div>
            <span>Tênis</span>
            <h2>{produto.name}</h2>
            <span>{produto.price}</span>
            {produto.priceDiscount !== produto.price && <span>{produto.priceDiscount}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductListingPage
