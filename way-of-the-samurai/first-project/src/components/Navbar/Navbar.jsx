import Menu from './Menu/Menu'
import logo from '../../assets/img/logo.svg'
import { Button } from '@material-ui/core'
import useStyles from './style'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className="navbar-wrapper">
      <div className='navbar-header-wrapper'>
        <a href='/home' className="navbar-header__logo" >
          <img src={logo} alt="logo" />
        </a>
        <div className='login-wrapper'>
          {!props.isAuth ? <NavLink to={'/login'}>
            <Button className={classes.buttonAuth} variant="outlined" color="primary" >
              Sign In
            </Button>
          </NavLink>
          : props.login
          }
        </div>
      </div>
      <Menu />
      <Button className={classes.root} variant="contained" color="primary">
        TWEET
      </Button>
    </div>
  )
}

export default Navbar