import ProductCard from "./ProductCard.jsx"

const ProductListing = ({produtos}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {produtos.map((produto)=> (
        <ProductCard key={produto.id} produto={produto}/>
      ))}
    </div>
  )
}

export default ProductListing
