import CategoryList from "../components/CategoryList.jsx"
import Section from "../components/Section"
import Banner from "../components/Banner"

const HomePage = () => {
  return (
    <div className="bg-(--bg-page)">
      <Banner />
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
