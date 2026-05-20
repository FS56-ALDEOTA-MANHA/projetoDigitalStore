import ProductCard from "./ProductCard.jsx"

const ProductListing = ({produtos}) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      {produtos.map((produto)=> (
        <ProductCard key={produto.id} produto={produto}/>
      ))}
    </div>
  )
}

export default ProductListing
