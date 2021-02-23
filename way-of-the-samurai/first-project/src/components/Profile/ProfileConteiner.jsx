import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { Component } from 'react';

class ProfileContainer extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/4`)
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
