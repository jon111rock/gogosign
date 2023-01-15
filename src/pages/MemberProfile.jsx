import Header from '../components/layout/Header'

const MemberProfile = () => {
  return (
    <div>
      <Header />
      <div className="mt-28 flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-5xl font-sans">Profile</h1>
        </div>
        <div className="mt-10 md:mt-20 flex justify-center">
          <form>
            <div className="flex flex-col md:flex-row px-3">
              <div className="md:mr-9">
                <div>
                  <label htmlFor="name">姓名</label>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="User Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">電子信箱</label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address">地址</label>
                  <div>
                    <input
                      type="text"
                      name="address"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile">電話</label>
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="company">公司名稱</label>
                  <div>
                    <input
                      type="text"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="job-title">職稱</label>
                  <div>
                    <input
                      type="text"
                      className="mb-5 px-5 py-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50"
                      placeholder="Job title"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="my-5 px-6 py-2 bg-yellow-200 text-white rounded-3xl hover:bg-yellow-400 hover:boroder-solid-white"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MemberProfile
