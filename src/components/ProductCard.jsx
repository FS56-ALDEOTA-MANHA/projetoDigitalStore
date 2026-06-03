import { Link } from "react-router-dom";

const ProductCard = ({produto, key}) => {
  console.log("Produto do ProductCard", produto)
  const tagPromo = ((produto.price - produto.priceDiscount) * 100 ) /produto.price
  return (
    <div key={key} className="w-73">
    <Link to={`/produto/${produto.id}`}>
      {/* Área da imagem */}
      <div className="relative w-full h-80.25 bg-white rounded-md flex items-center justify-center pr-4.5 shadow-xl shadow-[#6962621b]">
        {produto.priceDiscount !== produto.price && <span className="bg-[#E7FF86] top-5 left-5 text-nowrap px-4 py-1 rounded-2xl font-bold text-(--dark-gray-2) absolute">{`${parseInt(tagPromo)}% OFF`}</span>}
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
          <span className="text-[#1F1F1F] text-2xl font-bold">
            ${produto.price}
          </span>
        )}
      </div>
      </Link>
    </div>
    )
}

export default ProductCard;