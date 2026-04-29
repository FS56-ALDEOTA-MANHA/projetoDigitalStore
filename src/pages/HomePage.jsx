import Section from "../components/Section"

const HomePage = () => {
  return (
    <div>
      <Section>
        <div>Cards Promo</div>
      </Section>
      <Section textCenter>
        <div>Categorias</div>
      </Section>
      <Section title="Produtos em Alta" link>
        <div>Lista de produtos</div>
      </Section>
    </div>
  )
}

export default HomePage
