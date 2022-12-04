import logoImage from '@/assets/gogosign-logo.png'
import passwordImage from '@/assets/password.png'

const forgotPassword = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="h-screen w-3/4 mx-auto grid grid-cols-2">
        <img src={passwordImage} className="w-2/3 my-auto" />
        <div className="w-11/12 h-5/6 my-auto p-12 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <a href="/" className="flex justify-center">
            <img src={logoImage} className="w-1/2" />
          </a>
          <div className="flex flex-col items-center mt-7 mb-7">
            <p className="text-xl mb-2">Forgot Password?</p>
            <p className="text-sm text-gray-300">
              No worries, we’ll send you reset instructions.
            </p>
          </div>
          <div className="w-full">
            <input
              type="email"
              className="mb-5 p-3 w-full border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
              placeholder="E-mail"
            />
            <button
              type="submit"
              className="w-full p-3 bg-yellow-200 text-black-500 rounded-3xl hover:bg-yellow-400"
            >
              RESET PASSWORD
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forgotPassword
