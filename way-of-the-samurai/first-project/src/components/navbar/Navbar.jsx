import Menu from '../menu/Menu'
import logo from '../../assets/img/logo.svg'
import { Button } from '@material-ui/core'
import useStyles from './style';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="navbar-wrapper">
      <a href='#' className="logo" >
        <img src={logo} alt="logo" />
      </a>
      <Menu />
      <Button className={classes.root} variant="contained" color="primary">
        TWEET
      </Button>
    </div>
  )
}

export default Navbar