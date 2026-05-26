import FilterGroup from "../components/FilterGroup"

const ProductListingPage = () => {
  return (
    <div className="bg-(--bg-page) min-h-screen p-10">

      {/* Caixa lateral */}
      <aside className="bg-white w-[308px] p-6 rounded-sm">

        {/* Título */}
        <h2 className="text-[16px] text-(--dark-gray-2) font-bold">
          Filtrar por
        </h2>

        {/* Linha */}
        <div className="w-full h-[1px] bg-(--light-gray-2) my-5"></div>

        {/* Grupo Marca */}
        <FilterGroup
          title="Marca"
          inputType="checkbox"
          options={[
            { text: "Adidas", value: "adidas" },
            { text: "Nike", value: "nike" },
            { text: "Puma", value: "puma" },
          ]}
        />

        {/* Grupo Categoria */}
        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          options={[
            { text: "Esporte e lazer", value: "esporte" },
            { text: "Casual", value: "casual" },
            { text: "Corrida", value: "corrida" },
          ]}
        />

        {/* Grupo Estado */}
        <FilterGroup
          title="Estado"
          inputType="radio"
          options={[
            { text: "Novo", value: "novo" },
            { text: "Usado", value: "usado" },
          ]}
        />

      </aside>

    </div>
  )
}

export default ProductListingPage