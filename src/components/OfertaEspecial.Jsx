import { useNavigate } from "react-router-dom";
import Jordan from "../assets/Jordan.svg";
import Bola from "../assets/Bola.svg";
import Button from "./Button.jsx";

function OfertaEspecial() {
  const navigate = useNavigate();

  function irParaProduto() {
    navigate("/produtos");
  }

  return (
    <section className="flex flex-wrap items-center justify-between px-10 py-25">
      <div className="relative">
        <div className="absolute left-20 w-[466px] h-[466px] bg-linear-to-t from-transparent to-[#e9e1ff] rounded-full z-0"></div>
        <img
          src={Jordan}
          alt="Air Jordan"
          className="relative right-0 top-10 z-10 w-[600px]"
        />
      </div>
      <div className="max-w-[700px]">
        <p className="text-pink-600 font-bold">Oferta Especial</p>
        <h1 className="text-5xl fon mb-5">Air Jordan Ediçao de Colecionador</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <Button
          texto="Ver ofertas"
          onClick={irParaProduto}
        />

      </div>
    </section>
  );
}

export default OfertaEspecial

