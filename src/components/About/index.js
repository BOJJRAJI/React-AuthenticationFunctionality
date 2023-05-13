import Header from '../Header'

import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <div className="home-container">
    <Header />
    <div className="about-content">
      <h1 className="login-heading">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
