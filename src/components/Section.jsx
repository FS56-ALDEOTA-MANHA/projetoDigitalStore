import { Link } from "react-router-dom"
import seta from "../assets/seta.svg"

const Section = ({title="Coleções em Destaque", children, link, textCenter}) => {
  return (
    <>
      <section className="pb-30">
        <div className="flex justify-between">
          <h1 className={`${textCenter && "m-auto"} text-2xl font-bold text-[#474747] pb-5`}>{title}</h1> 

          {link && <Link className= "text-[#c92071] w-30 text-nowrap front-normal flex items-center gap-2.5 text-[18px] " to={"produtos"}> <span>Ver todos</span> <img className="w-4" src={seta} alt="seta" /> </Link>}
        </div>
        {children}
    </section>
    </>
  )
}

export default Section
