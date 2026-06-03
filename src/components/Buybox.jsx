import Button from "./Button"

const BuyBox = ({
  name,
  category = "Casual",
  brand = "Nike",
  reference,
  rating = 4.7,
  reviews = 90,
  price,
  priceDiscount,
  description,
  sizes = [39, 40, 41, 42, 43],
  selectedSize = 41,
  colors = ["#6ee7f9", "#ff6961", "#555555", "#6b6bcf"],
  selectedColor = "#ff6961",
  shipping = "Frete grátis",
}) => {
  return (
    <div className="max-w-xl flex flex-col gap-5">
      <h1 className="text-[32px] leading-[36px] font-bold text-(--dark-gray)">
        {name}
      </h1>

      <div className="flex items-center gap-2 text-[12px] text-(--dark-gray-3)">
        <span>
          {category} | {brand}
        </span>

        <span>
          REF:{reference}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex text-[#F6AA1C] text-[18px]">
          ★★★★☆
        </div>

        <div className="bg-[#F6AA1C] px-2 py-1 rounded text-white text-sm font-bold">
          {rating}
        </div>

        <span className="text-(--light-gray) text-sm">
          ({reviews} avaliações)
        </span>
      </div>

      <div className="flex items-end gap-3">
        {priceDiscount ? (
          <>
            <span className="text-[16px] text-(--light-gray-2) line-through">
              R$ {price}
            </span>

            <span className="text-[32px] font-bold text-(--dark-gray-2)">
              R$ {priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-(--dark-gray-2)">
            R$ {price}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-bold text-(--dark-gray-2) mb-2">
          Descrição do produto
        </h3>

        <p className="text-[14px] leading-6 text-(--dark-gray-2)">
          {description}
        </p>
      </div>

      <div>
        <h3 className="font-bold text-(--dark-gray-2) mb-3">
          Tamanho
        </h3>

        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              className={
                size === selectedSize
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
          {colors.map((color) => (
            <div
              key={color}
              className={
                color === selectedColor
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
        {shipping}
      </div>

      <Button color="warning">
        COMPRAR
      </Button>
    </div>
  )
}

export default BuyBox