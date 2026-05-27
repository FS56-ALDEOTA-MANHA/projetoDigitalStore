import LoginForm from "../components/LoginForm"
import tenisLeft from "../assets/tenis_left.svg"
import tenisRight from "../assets/tenis_right.svg"

const LoginPage = () => {
  return (
    <div
      className="min-h-screen px-4 py-10 md:px-8 md:py-16 bg-linear-to-t from-[#EFEFFF] to-[#B5B6F2]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <LoginForm />

        <div className="hidden lg:flex items-center justify-center relative min-h-[520px]">
          <img src={tenisLeft} alt="Tenis esquerdo" className="w-[290px] xl:w-[340px] relative z-10" />
          <img
            src={tenisRight}
            alt="Tenis direito"
            className="w-[280px] xl:w-[330px] -ml-10 mt-40 relative z-0"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
