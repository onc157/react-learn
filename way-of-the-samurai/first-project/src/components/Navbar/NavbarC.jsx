import './style.scss'
import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducers/auth-reducer';

class NavbarC extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data
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