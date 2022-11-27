import logoImage from '@/assets/gogosign-logo.png'
import Icon from '../Icon'

const Footer = () => (
  <div className="bg-yellow-100 py-2">
    <footer className="flex justify-evenly items-end">
      <div className="flex">
        <img src={logoImage} className="mr-2" style={{ width: '70px' }} />
        <small>| Copyright &copy; {new Date().getFullYear()} GoGoSign</small>
      </div>
      <div className="flex">
        <span className="mr-2">聯絡我們</span>
        <a href="https://github.com/jon111rock" target="_blank">
          <Icon type="github" />
        </a>
        <a href="https://github.com/Louise-Huang" target="_blank">
          <Icon type="github" />
        </a>
        <a href="https://github.com/karinhsin" target="_blank">
          <Icon type="github" />
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
