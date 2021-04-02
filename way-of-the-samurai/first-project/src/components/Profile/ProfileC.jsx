import Profile from './Profile'
import { connect } from 'react-redux'
import { setUser } from '../../redux/reducers/profile-reducer'
import { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router'

class ProfileC extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.setUser(userId)
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

export default connect(mapStateToProps, {setUser})(withRouter(ProfileC))
