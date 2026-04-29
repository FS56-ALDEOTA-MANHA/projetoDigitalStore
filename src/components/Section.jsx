import { Link } from "react-router-dom"
import seta from "../assets/seta.svg"

const Section = ({title="coleçoes em destaque", childrem, link, textCenter}) => {
  return (
    <>
    <section>
        <div className="flex justify-between">
          <h1 className={'${textCenter && "m-auto"} text-2xl font-bold text-[#474747]'}>{title}</h1> 
          {link && <Link className= "text-[#c92071] w-30 text-nowrap front-normal flex items-center gap-2.5 text-[18px] " to={"produtos"}> <span>ver todos</span> <img className="w-4" src="{seta}" alt="seta" /> </Link>}
        </div>
        {childrem}
    </section>
    </>
  )
}

export default Section
