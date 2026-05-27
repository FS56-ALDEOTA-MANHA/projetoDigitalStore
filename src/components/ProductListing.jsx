import ProductCard from "./ProductCard.jsx"

const ProductListing = ({produtos}) => {
  return (
    <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(292px,1fr))]">
      {produtos.map((produto)=> (
        <ProductCard key={produto.id} produto={produto}/>
      ))}
    </div>
  )
}

export default ProductListing
