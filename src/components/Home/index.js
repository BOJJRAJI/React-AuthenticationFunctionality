import Header from '../Header'

import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content">
      <h1 className="login-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
