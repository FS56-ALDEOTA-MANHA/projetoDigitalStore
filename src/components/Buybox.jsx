import { useParams } from "react-router-dom"
import Button from "./Button"
import { useEffect, useState } from "react"

const BuyBox = () => {
  const [produto, setProduto] = useState({})
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const {id} = useParams()
  console.log(id)

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`)
      const dados = await response.json()
      console.log(dados)
      setProduto(dados)
    } catch (error) {
      console.error("Erro na requisição", error)
    }
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div className="flex w-full gap-10 px-25 py-10">
      <div className="w-1/2 flex items-center" style={{ backgroundColor: produto?.colors?.[selectedColor] }}>
        <img src={produto.image} alt={produto.name} className="w-[80%]"/>
      </div>
    <div className="max-w-1/2 flex flex-col gap-5">
      <h1 className="text-[32px] leading-9 font-bold text-(--dark-gray)">
        {produto.name}
      </h1>

      <div className="flex items-center gap-2 text-[12px] text-(--dark-gray-3)">
        <span>
          {produto.category} | {produto.brand}
        </span>

        <span>
          REF:{produto.reference}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex text-[#F6AA1C] text-[18px]">
          ★★★★☆
        </div>

        <div className="bg-[#F6AA1C] px-2 py-1 rounded text-white text-sm font-bold">
          {produto.rating}
        </div>

        <span className="text-(--light-gray) text-sm">
          ({produto.reviews} avaliações)
        </span>
      </div>

      <div className="flex items-end gap-3">
        {produto.priceDiscount ? (
          <>
            <span className="text-[16px] text-(--light-gray-2) line-through">
              R$ {produto.price}
            </span>

            <span className="text-[32px] font-bold text-(--dark-gray-2)">
              R$ {produto.priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-(--dark-gray-2)">
            R$ {produto.price}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-bold text-(--dark-gray-2) mb-2">
          Descrição do produto
        </h3>

        <p className="text-[14px] leading-6 text-(--dark-gray-2)">
          {produto.description}
        </p>
      </div>

      <div>
        <h3 className="font-bold text-(--dark-gray-2) mb-3">
          Tamanho
        </h3>

        <div className="flex gap-3">
          {produto?.sizes?.map((size, index) => (
            <button
              onClick={()=> setSelectedSize(index)}
              key={index}
              className={
                index === selectedSize
                  ? "w-12 h-12 rounded border border-(--primary) bg-(--primary) text-white font-bold"
                  : "w-12 h-12 rounded border border-(--light-gray-2) bg-white text-(--dark-gray-2) font-bold"
              }
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-(--dark-gray-2) mb-3">
          Cor
        </h3>

        <div className="flex gap-4">
          {produto?.colors?.map((color, index) => (
            <button
              onClick={()=> setSelectedColor(index)}
              key={index}
              className={
                index === selectedColor
                  ? "w-8 h-8 rounded-full ring-2 ring-(--primary) ring-offset-2"
                  : "w-8 h-8 rounded-full"
              }
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-sm text-(--dark-gray-3)">
        {produto.shipping}
      </div>

      <Button color="warning" texto="comprar"/>
    </div>
    </div>
  )
}

export default BuyBox