import notFoundImage from '@/assets/404.png'

const notFound = () => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="h-screen w-3/4 mx-auto flex flex-col justify-center items-center">
        <img src={notFoundImage} className="w-2/5" />
        <a
          href="/"
          className="w-32 mt-12 p-3 text-center bg-yellow-200 text-black-500 rounded-3xl hover:bg-yellow-400"
        >
          GO HOME
        </a>
      </div>
    </div>
  )
}

export default notFound
