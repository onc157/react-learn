import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { Component } from 'react';
import './style.scss'
import { withRouter } from 'react-router';
import { profileAPI } from '../../api/api';

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    profileAPI.setUser(userId)
      .then(response => {
        this.props.setUserProfile(response)
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
