import { Link } from "react-router-dom"
import Button from "./Button"
import chama from "../assets/Chama.png"
import tenisCapa from "../assets/TenisCapa.svg"
import ornamento from "../assets/Ornamento.svg"

const Banner = () => {
  return (
    <section className="bg-[#F5F5F5] w-full min-h-[500px] flex items-center justify-center gap-20 px-16 py-13 absolute">
      {/* LADO ESQUERDO */}
      <div className="max-w-[420px] z-10">
        <h2 className="text-[#F6AA1C] text-sm font-bold mb-5 tracking-wide">
          Melhores ofertas personalizadas
        </h2>

        <h1 className="text-[50px] leading-[65px] font-extrabold text-[#1F1F1F] flex items-center gap-3 mb-6">
          <span className="flex flex-col">
            <span>Queima de</span>
            <span className="whitespace-nowrap">estoque Nike</span>
          </span>

          <img
            src={chama}
            alt="Ícone de foguinho"
            className="w-30 h-30"
          />
        </h1>

        <p className="text-[#474747] text-base leading-7 mb-8">
          Consequat culpa exercitation mollit nisi excepteur do
          do tempor laboris eiusmod irure consectetur.
        </p>

        <Button as={Link} to="/produtos" texto="Ver ofertas">
        </Button>
      </div>

      {/* LADO DIREITO */}
      <div className="relative flex items-center justify-center w-[600px] h-[400px]">
        <img
          src={ornamento}
          alt="Ornamento"
          className="absolute top-0 right-0 w-36 opacity-60"
        />

        <img
          src={tenisCapa}
          alt="Tênis Nike"
          className="w-full max-w-[550px] relative z-10"
        />
      </div>
    </section>
  )
}

export default Banner