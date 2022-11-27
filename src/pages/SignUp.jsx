import logoImage from '@/assets/gogosign-logo.png'
import welcomeImage from '@/assets/welcome.png'

const SignUp = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="h-screen w-3/4 mx-auto grid grid-cols-2">
        <img src={welcomeImage} className="w-2/3 my-auto" />
        <div className="w-11/12 h-5/6 my-auto p-12 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <a href="/" className="flex justify-center">
            <img src={logoImage} className="w-1/2" />
          </a>
          <div className="flex justify-center mt-7 mb-7">
            <button className="w-28 p-2 border-b-2 border-black-500">
              REGISTER
            </button>
            <button className="w-28 p-2 border-b-2 border-gray-300 text-gray-300">
              LOGIN
            </button>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="mb-5 p-3 w-full border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
              placeholder="User Name"
            />
            <input
              type="email"
              className="mb-5 p-3 w-full border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
              placeholder="E-mail"
            />
            <input
              type="password"
              className="mb-5 p-3 w-full border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-200 text-black-500 rounded-3xl hover:bg-yellow-400">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
