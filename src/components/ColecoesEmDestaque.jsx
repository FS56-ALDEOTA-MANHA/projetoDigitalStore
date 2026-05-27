import { Link, useNavigate } from "react-router-dom";

import CamisetaPromo from "../assets/CamisetaPromo.svg";
import TenisPromo from "../assets/TenisPromo.svg";
import HeadPhonePromo from "../assets/HeadPhonePromo.svg";
import Button from "./Button";

function ColecoesEmDestaque() {
  const navigate = useNavigate()

  const produtosPromo = [
    {
      titulo: "Novo Drop Supreme",
      img: CamisetaPromo
    },
    {
      titulo: "Coleção Adidas",
      img: TenisPromo
    },
    {
      titulo: "Novo Beats Bass",
      img: HeadPhonePromo
    },
  ]

  return (
    <div className="flex gap-3 ">
      {produtosPromo.map((produto, index) => (
        <div key={index} className="relative w-full bg-[#d8e6f7] rounded-sm pt-5 pl-5 flex justify-between">
          <div className="pb-5 md:pb-8">
            <span className=" bg-[#e7ff86] rounded-full px-4 py-1 text-xs font-bold">30% OFF</span>
            <h2 className={`w-[67%] mt-2.5 mb-5 text-[32px] font-bold leading-9 text-gray-800`}>{produto.titulo}</h2>
            <Button onClick={() => navigate("/produtos")} color="secondary" texto="Comprar" className=" mt-4 bg-white text-pink-600 font-bold text-sm rounded-[4px]" />
          </div>
          <img src={produto.img} alt={produto.titulo} className="absolute right-0 bottom-0 w-54" />
        </div>
      ))}
    </div>
  );
}

export default ColecoesEmDestaque;

