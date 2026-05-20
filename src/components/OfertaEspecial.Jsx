import { useNavigate } from "react-router-dom";
import Jordan from "../assets/Jordan.svg";
import Bola from "../assets/Bola.svg";
import button from "./Button";

function hero() {
  const navigate = useNavigate();

  function verOferta() {
    navigate("/Produtos");
  }

  return (
    <section className=" flex items-center justify-between px-10 py-16">
      <div className="relative">
        <div className="absolute w-[466px] h-[466px] bg-purple-200 rounded-full z-0"></div>
        <img
          src="Jordan"
          alt="Air Jordan"
          className="relative z-10 w-[400px]"
        />
      </div>
      <div className="max-w-[500px]">
        <p className="text-pink-600 font-bold">Oferta Especial</p>
        <h1 className="text-5xl fon mb-5">Air Jordan Ediçao de Colecionador</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button onClick={irParaProduto} className="bg-pink-600 text-white px-8 py-3 rounded">Ver Oferta</button>
      </div>
    </section>
  );
}

export default OfertaEspecial

