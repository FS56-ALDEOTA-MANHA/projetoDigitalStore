const Button = ({ color = "primary", texto = "Clique aqui" }) => {
  const styles = {
    primary: "bg-[#C92071] text-white border-2 border-[#C92071]",
    secondary: "bg-[#F5F5F5] text-[#C92071] border-2 border-[#C92071]",
  }

  return (
    <button className={`${styles[color]} px-6 py-2 rounded-lg font-semibold cursor-pointer`}>
      {texto}
    </button>
  )
}

export default Button