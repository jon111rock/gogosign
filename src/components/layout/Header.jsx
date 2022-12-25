import logoImage from '@/assets/gogosign-logo.png'

const Header = () => {
  return (
    <>
      <div className="h-14 px-8 bg-yellow-100 flex justify-between items-center fixed top-0 left-0 right-0 z-[100]">
        <div className="mx-3">
          <a href="/">
            <img src={logoImage} className="h-10 mt-1 p-1" />
          </a>
        </div>
        <div className="header-right">
          <a
            href="/login"
            className="ml-2 px-3 py-2 text-yellow-200 boroder-solid-yellow-200 border-2 rounded-2xl hover:bg-yellow-400 hover:text-white"
          >
            LOGIN
          </a>
          <a
            href="/signup"
            className="ml-2 px-3 py-2 bg-yellow-200 text-white rounded-2xl hover:bg-yellow-400 hover:boroder-solid-white"
          >
            REGISTER
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
