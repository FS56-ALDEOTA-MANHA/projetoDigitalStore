import CategoryList from "../components/CategoryList.jsx"
import Section from "../components/Section"
import Banner from "../components/Banner"
import ColecoesEmDestaque from "../components/ColecoesEmDestaque.jsx"

const HomePage = () => {
  return (
    <div className="bg-(--bg-page)">
      <Banner />
      <Section> 
        <ColecoesEmDestaque/>
      </Section>
      <Section textCenter>
        <CategoryList/>
      </Section>
      <Section title="Produtos em Alta" link >
        <div>lista de produto</div>
      </Section>
    </div>
  )
}

export default HomePage
