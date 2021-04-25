import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profile-reducer';
import { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router'
import { compose } from 'redux';

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 15734 // TODO: ADD API REQUEST!
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
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter
)(ProfileC)
