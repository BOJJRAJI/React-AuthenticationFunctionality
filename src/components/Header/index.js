import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-items">
    <li className="item1">
      <Link to="/">Home</Link>
    </li>
    <li className="item2">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
