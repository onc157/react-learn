import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    return (
      !props.isAuth ? <Redirect to='/login' /> : <Component {...props} />
    )
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}