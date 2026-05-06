import CategoryList from "../components/CategoryList.jsx"
import Section from "../components/Section"

const HomePage = () => {
  return (
    <div className="bg-(--bg-page)">
      <Section>
        <div>cards promo</div>
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
