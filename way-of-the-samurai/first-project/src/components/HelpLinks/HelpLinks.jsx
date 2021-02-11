import { Breadcrumbs, Link } from '@material-ui/core';
import useStyles from './style'

const HelpLinks = () => {
  const classes = useStyles();

  return (
    <div className='help-links'>
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
        <Link color="inherit" href="#">
          Terms
        </Link>
        <Link color="inherit" href="#">
          Privacy policy
        </Link>
        <Link
          color="inherit"
          href="#"
        >
          Cookies
        </Link>
        <Link
          color="inherit"
          href="#"
        >
          Add info
        </Link>
      </Breadcrumbs>
    </div>
  )
}

export default HelpLinks