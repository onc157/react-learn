import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { Component } from 'react';
import './style.scss'
import { withRouter } from 'react-router';

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile { ...this.props } profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileC))
