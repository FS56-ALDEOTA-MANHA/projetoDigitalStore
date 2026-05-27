import FilterGroup from "../components/FilterGroup"
import { useEffect, useState } from "react"
import ProductListing from "../components/ProductListing"

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

  useEffect(()=> {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchData()
  }, [])


  return (
    <div className="bg-(--bg-page) min-h-screen p-10">
      <aside className="bg-white w-[308px] p-6 rounded-sm fixed top-40">

        <h2 className="text-[16px] text-(--dark-gray-2) font-bold">
          Filtrar por
        </h2>

    
        <div className="w-full h-[1px] bg-(--light-gray-2) my-5"></div>

        <FilterGroup
          title="Marca"
          inputType="checkbox"
          options={[
            { text: "Adidas", value: "adidas" },
            { text: "Nike", value: "nike" },
            { text: "Puma", value: "puma" },
          ]}
        />
        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          options={[
            { text: "Esporte e lazer", value: "esporte" },
            { text: "Casual", value: "casual" },
            { text: "Corrida", value: "corrida" },
          ]}
        />

        <FilterGroup
          title="Estado"
          inputType="radio"
          options={[
            { text: "Novo", value: "novo" },
            { text: "Usado", value: "usado" },
          ]}
        />

      </aside>
      <div className="pl-90">
      <ProductListing produtos={dados} />
      </div>
    </div>
  )
}

export default ProductListingPage