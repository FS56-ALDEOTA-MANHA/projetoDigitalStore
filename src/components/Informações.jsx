import { Links } from "react-router-dom";
import Logo from "../assets/Logo.svg";

import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

function Informações() {
  const footerLinks = [
    {
      titulo: "Informações",
      links: [
        { nome: "Sobre Drip Store", Links: "/Sobre" },
        { nome: "Segurança", Links: "/Segurança" },
        { nome: "Wishlist", Links: "/Wishlist" },
        { nome: "Blog", Links: "/Blog" },
        { nome: "Trabalhe Conosco", Links: "/Trabalhe-Conosco" },
        { nome: "Meus Pedidos", Links: "/Meus-Pedidos" },
      ],
    },
    {
      titulo: "Categorias",
      links: [
        { nome: "Camiseta", Links: "/Categoria/Camiseta" },
        { nome: "Calças", Links: "/Categoria/Calças" },
        { nome: "Bonés", Links: "/Categoria/Bonés" },
        { nome: "HeadPhone", Links: "/Categoria/HeadPhone" },
        { nome: "Tênis", Links: "/Categoria/Tênis" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="flex justify-between">
        <Logo />
        <div className="w-[1,440px] h-[344px]">
          <h2 className="text-2xl font-bold mb-9">Digital Store</h2>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <div className="flex gap-5.5 text-2xl ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitch />
          </div>
          {footerLinks.map((coluna, index) => (
            <div key={index}>
              <h3 className="font-bold mb-5">{coluna.titulo}</h3>

              <ul className="flex flex-col gap-3 text-sm text-gray-300">
                {coluna.links.map((Link, index) => (
                  <li key={index}>
                    <Link to={Link.rota}>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-[250px]">
            <h3 className="font-bold mb-5">Contato</h3>
            <p className="text-sm text-gray-300 mb-5">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161</p>
            <p className=" text-sm text-gray-300"> (85) 3051-3411</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-8" />
      <p className="text-center text-xs text-gray-300">@ 2022 Digital College</p>
    </footer>
  );
}

export default Informações;