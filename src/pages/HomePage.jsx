import writing from '@/assets/writing.png'
import update from '@/assets/update.png'
import rising from '@/assets/rising.png'
import email from '@/assets/email.png'
import logoImage from '@/assets/gogosign-logo.png'
import Header from '../components/layout/Header'
import Icon from '../components/Icon'

const HomePage = () => {
  return (
    <div className="h-screen">
      <Header />
      <section className="mt-3 mb-5 xl:w-4/5 mx-auto flex flex-wrap">
        <div className="w-full flex flex-col mt-14 mx-8 md:mt-20 md:mx-0 md:px-8 lg:mt-20 lg:mx-36 lg:px-8 lg:flex-row lg:text-left p-0 items-center text-center ">
          <div className="lg:w-1/2">
            <div>
              <h1 className="text-2xl my-5 md:text-5xl font-bold">
                狗狗賽GoGoSign，數位化簽名流程專家
              </h1>
              <h2 className="text-base my-2.5 md:text-2xl md:my-4">
                最快速、安全、效率的電子簽名服務，線上文件簽署即簽即傳，讓業務推展順暢無阻
              </h2>
            </div>
            <div className="lg:hidden">
              <div className="flex justify-center">
                <img src={writing} className="mr-2 w-4/5 md:w-4/5" />
              </div>
            </div>
            <div className="lg:mt-12 lg:mb-5 w-full ">
              <div className="flex flex-col justify-start items-center md:flex-row w-full md:w-1/2 lg:w-full m-auto">
                <input
                  type="text"
                  className="w-full mb-5 p-3 border border-black-500 rounded-3xl text-sm placeholder-gray-300 focus:outline-none focus:border-yellow-200 focus:ring focus:ring-yellow-200/50 md:mr-4 md:w-1/2"
                  placeholder="輸入電子郵件信箱"
                />
                <a
                  href="/signup"
                  className="w-full mb-5 px-10 py-3 md:p-3 bg-yellow-200 text-white rounded-3xl hover:bg-yellow-400 hover:boroder-solid-white text-center md:w-1/2"
                >
                  立刻開始
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div>
              <img src={writing} className="mr-2 hidden lg:block" />
            </div>
          </div>
        </div>
        <div className="mx-8 p-0 mt-10 lg:mx-36">
          <div className="flex flex-col md:flex-row items-center">
            <div className="min-h-400 md:w-1/2">
              <div>
                <img src={update} className="mr-2" />
              </div>
            </div>
            <div className="md:w-1/2 md:mx-5">
              <h1 className="text-2xl my-5 md:text-4xl font-bold">
                行動簽署，流程更簡易、快速
              </h1>
              <h2 className="text-base md: md:text-xl">
                無論身處何處，您皆可在任何平台與裝置上發送簽署文件給客戶，確保所有業務都能即時處理，商務推展更快速。
              </h2>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 md:mx-5">
              <h1 className="text-2xl my-5 md:text-4xl font-bold">
                追蹤多項簽名任務，掌握每筆商機
              </h1>
              <h2 className="text-base md: md:text-xl">
                即刻拋開過往列印、傳真和電子郵件寄送的傳統作法！集中管理所有簽署任務，讓您隨時掌握待自己、待他人簽署和已完成簽名的文件，把時間留給更重要的事情。
              </h2>
            </div>
            <div className="min-h-400 md:w-1/2 md:mx-5">
              <div>
                <img src={rising} className="mr-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="min-h-400 md:w-1/2 md:mx-5">
              <div>
                <img src={email} className="mr-2" />
              </div>
            </div>
            <div className="md:w-1/2 md:mx-5">
              <h1 className="text-2xl my-5 md:text-4xl font-bold">
                簡化文件簽署，自動化流程管控
              </h1>
              <h2 className="text-base md: md:text-xl">
                簽名邀請發出後，可按設定一併或批次寄送提醒至相關人的信箱同步進度，毋須再逐一聯絡。即使在遠端也能透過行動裝置輕鬆追蹤所有文件進度。
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[url('@/assets/footer.svg')] bg-cover h-40 flex justify-center">
        <footer className="flex flex-col justify-evenly md:items-end mb-3 mx-5 md:mx-0 md:flex-row">
          <div className="flex">
            <img src={logoImage} className="mr-2" style={{ width: '70px' }} />
            <small>| Copyright &copy {new Date().getFullYear()} GoGoSign</small>
          </div>
          <div className="flex justify-center">
            <span className="md:ml-10 md:mr-2">聯絡我們</span>
            <a
              href="https://github.com/jon111rock"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon type="github" />
            </a>
            <a
              href="https://github.com/Louise-Huang"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon type="github" />
            </a>
            <a
              href="https://github.com/karinhsin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon type="github" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default HomePage
