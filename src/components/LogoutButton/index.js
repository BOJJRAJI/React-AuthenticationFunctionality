import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogOut}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
