const ProductCard = ({imagem, nome, preco, precoDesconto,}) => (
    <div className="w-[292px]">
      {/* Área da imagem */}
      <div className="w-[292px] h-[321px] bg-white rounded-md flex items-center justify-center overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nome do produto */}
      <h3 className="mt-3 text-base text-[#474747] font-normal">
        {name}
      </h3>

      {/* Área de preços */}
      <div className="flex items-center gap-2 mt-1">
        {/* Se existir desconto */}
        {precoDesconto ? (
          <>
            <span className="text-[#8F8F8F] text-2xl line-through">
              ${preco}
            </span>

            <span className="text-[#1F1F1F] text-2xl font-bold">
              ${precoDesconto}
            </span>
          </>
        ) : (
          /* Se NÃO existir desconto */
          <span className="text-[#1F1F1F] text-2xl font-bold">
            ${preco}
          </span>
        )}
      </div>
    </div>
  )

export default ProductCard