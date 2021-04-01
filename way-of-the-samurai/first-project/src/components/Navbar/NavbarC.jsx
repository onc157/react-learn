import './style.scss'
import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducers/auth-reducer';
import { authAPI } from '../../api/api';

class NavbarC extends Component {
  componentDidMount() {
    authAPI.setAuth()
      .then(response => {
        if (response.resultCode === 0) {
          const { id, email, login } = response.data
          this.props.setAuthUserData({ id, email, login })
        }
      })
  }

  render () {
    return <Navbar { ...this.props } />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})


export default connect(mapStateToProps, { setAuthUserData })(NavbarC)