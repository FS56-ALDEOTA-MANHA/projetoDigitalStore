import { Link, } from "react-router-dom";

import CamisetaPromo from "../assets/CamisetaPromo";
import TenisPromo from "../assets/TenisPromo";
import HeadPhonePromo from "../assets/HeadPhonePromo";

function ColeçõesEmDestaque() {
    return (
      <section className="px-10 py-8 bg-[#f9f8fe]">
        <h2 className="mb-4 text-xl font-bold text-gray-700">ColeçõesEmDestaque</h2>
         <div className="flex gap-3">
          <div className="relative w-[273px] h-[170-px] bg-[#d8e6f7] roudend-[4px] overflow-hidden p-5">
            <span className="absolute top-6 left-5 z-20 bg-[e7ff86] rounded-full px-4 py-1 text-xs font-bold">30% OFF</span>
        <h2 className="relative z-10 mt-10 text-2xl font-bold leading-6 text-gray-800">Novo Drop <br /> Supreme</h2>
            <link to="/produtos" className="relative z-10 mt-4 inline-block bg-white text-pink-600 font-bold text-sm px-7 py-3 rounded-[4px]">Comprar</link> 
        <img src={CamisetaPromo}alt="Camiseta Supreme" className="absolute right-0 bottom-0 z-0 w-[170px]" />
   </div>

        <div className="relative w-[273px] h-[170px] bg-[#d8e6f7] rounded-[4px] overflow-hidden p-5">
            <span className="absolute top-6 left-5 z-20 bg-[#e7ff86] rounded-full px-4 py-1 text-xs font-bold">30% OFF</span>
        <h2 className="relative z-10 mt-10 text-2xl font-bold leading-6 text-gray-800">Coleçao <br />Adidas</h2>
            <link to="/produtos" className="relativo z-10 mt-4 inline-block bg-white text-pink-600 font-bold text-sm px-7 py-3 rounded-[4px]">Comprar</link>
        <img src={TenisPromo} alt="Tenis Adidas" className="absolute right-0 botttom-0 z-0 w[190px]"/>
    </div>

        <div className="relative w-[273px] h-[170px] bg-[#d8e6f7] rounded-[4px] overflow-hidden p-5">
            <span className="absolute top-6 left-5 z-20 bg-[#e7ff86] rounded-full px-4 py-1 text-xs font-bold">30% OFF</span>
            <h2 className="relative z-10 mt-10 text-2xl font-bold leading-6 text-gray-800">Novo <br />Beat Bass</h2>
                <link to="/produtos" className="relative z-10 mt-4 inline-block bg-white text-pink-600 font-bold text-sm py-3 rounded-[4px]">Comprar</link>
            <img src={HeadPhonePromo} alt="HeadPhone Beats" className="absolute right-0 bottom-0 z-0 w-[165px]"/>    
     </div>
 </div> 
</section>
  );
}

export default ColeçõesEmDestaque;

