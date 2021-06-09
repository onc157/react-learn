import './style.scss'
import { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { userLogout} from '../../redux/reducers/auth-reducer';

class NavbarC extends Component {
  render () {
    return <Navbar { ...this.props } />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})


export default connect(mapStateToProps, { userLogout })(NavbarC)