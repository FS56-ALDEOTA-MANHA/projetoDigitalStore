import CategoryList from "../components/CategoryList.jsx";
import Section from "../components/Section";
import Banner from "../components/Banner";
import ColecoesEmDestaque from "../components/ColecoesEmDestaque.jsx";
import ProductListing from "../components/ProductListing.jsx";
import {useState, useEffect} from "react";
import OfertaEspecial from "../components/OfertaEspecial.jsx"

const HomePage = () => {
  const [produtos, setProdutos] = useState([])
  
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/produtos")
      const dados = await response.json()
      console.log(dados)
      setProdutos(dados)
    } catch (error) {
      console.error("Erro na requisição", error)
    }
  }

  //useEffect recebe 2 parâmetros: 1 - função que renderiza o efeito colateral e 2 - é a dependência (representada pelo [])
  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div className="bg-(--bg-page)">
      <Banner />
      <Section> 
        <ColecoesEmDestaque/>
      </Section>
      <Section textCenter>
        <CategoryList/>
      </Section>
      <Section title="Produtos em Alta" link>
        <ProductListing produtos={produtos}/>
      </Section>
      <OfertaEspecial/>
    </div>
  )
}

export default HomePage
