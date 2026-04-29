import { Link } from "react-router-dom"


const Section = ({title="coleçoes em destaque", childrem, link, textCenter}) => {
  return (
    <>
    <section>
        <div className="flex justify-between">
          <h1 className={'${textCenter && "m-auto"} text-2xl font-bold text-[#474747]'}>{title}</h1> 
          {link && <Link className= "#text-[#c92071] front-normal text-[18px] "to={"produtos"}>ver todos</Link>}
        </div>
        {childrem}
    </section>
    </>
  )
}

export default Section
