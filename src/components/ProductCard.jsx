
const ProductCard = ({produto, key}) => {
  console.log("Produto do ProductCard", produto)
  return (
    <div key={key} className="w-73">
      {/* Área da imagem */}
      <div className="w-full h-80.25 bg-white rounded-md flex items-center justify-center pr-4.5 shadow-xl shadow-[#6962620D]">
        <img
          src={produto.image}
          alt={produto.name}
          className="w-full"
        />
      </div>

      {/* Nome do produto */}
      <h2 className="mt-4.5 text-xs text-(--light-gray) font-bold">Tênis</h2>
      <h3 className=" text-2xl text-[#474747] font-normal">
        {produto.name}
      </h3>

      {/* Área de preços */}
      <div className="flex items-center gap-2 mt-1">
        {/* Se existir desconto */}
        {produto.priceDiscount !== produto.price ? (
          <>
            <span className="text-[#8F8F8F] text-2xl line-through">
              ${produto.price}
            </span>

            <span className="text-[#1F1F1F] text-2xl font-bold">
            ${produto.priceDiscount}
            </span>
          </>
        ) : (
          /* Se NÃO existir desconto */
          <span className="text-[#1F1F1F] text-2xl font-bold">
            ${produto.price}
          </span>
        )}
      </div>
    </div>
    )
}

export default ProductCard