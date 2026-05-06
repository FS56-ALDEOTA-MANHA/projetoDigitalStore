import camiseta from "../assets/Camiseta.svg"
import calca from "../assets/Calca.svg"
import headphone from "../assets/Headphone.svg"
import tenis from "../assets/Tenis.svg"

const CategoryList = () => {
  const categorias = [
    {
      id: 1,
      descricao: "Camisetas",
      img: camiseta,
    },
    {
      id: 2,
      descricao: "Calças",
      img: calca,
    },
    {
      id:3,
      descricao: "Bonés",
      img: calca,
    },
    {
      id:4,
      descricao: "Headphones",
      img: headphone,
    },
    {
      id:5,
      descricao: "Tênis",
      img: tenis,
    }
  ]
  return (
    <div className="flex justify-center gap-12">
      {categorias.map((categoria)=> (
        <div className="flex flex-col justify-center items-center">
          <div className={`bg-white p-5 rounded-full`}>
            <img className="" src={categoria.img} alt={categoria.descricao}/>
          </div>
          <span>{categoria.descricao}</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
