import Section from "../components/Section"

const HomePage = () => {
  return (
    <div>
      <Section>
        <div>cards promo</div>
      </Section>
      <Section textCenter>
        <div>categorias</div>
      </Section>
      <Section title="Produtos em Alta" link >
        <div>lista de produto</div>
      </Section>
    </div>
  )
}

export default HomePage
