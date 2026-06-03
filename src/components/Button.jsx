const Button = ({ color = "primary", texto = "Clique aqui" , onClick}) => {
  const styles = {
    primary: "bg-[#C92071] text-white",
    secondary: "bg-[#F5F5F5] text-[#C92071]",
    warning: "bg-[#ffb31f] text-white uppercase"
  }

  return (
    <button onClick={onClick} className={`${styles[color]} px-10 py-2 rounded-lg font-semibold cursor-pointer w-fit`}>
      {texto}
    </button>
  )
}

export default Button