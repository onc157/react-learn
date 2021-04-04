import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile } from '../../redux/reducers/profile-reducer'
import { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
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

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)(ProfileC)
