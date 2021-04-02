import './style.scss'
import { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/reducers/auth-reducer';

class NavbarC extends Component {
  componentDidMount() {
    this.props.setAuth()
  }

  render () {
    return <Navbar { ...this.props } />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})


export default connect(mapStateToProps, { setAuth })(NavbarC)