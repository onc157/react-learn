import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profile-reducer';
import { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router'
import { compose } from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authUserId
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile { ...this.props } profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
})

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter, withAuthRedirect
)(ProfileC)
