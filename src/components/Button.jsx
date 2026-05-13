const Button = ({ color = "primary", texto = "Clique aqui" , onClick}) => {
  const styles = {
    primary: "bg-[#C92071] text-white",
    secondary: "bg-[#F5F5F5] text-[#C92071]",
  }

  return (
    <button onClick={onClick} className={`${styles[color]} px-6 py-2 rounded-lg font-semibold cursor-pointer`}>
      {texto}
    </button>
  )
}

export default Button