import './style.scss'
import { Component } from 'react';
import {
  follow,
  setCurrentPage,
  unfollow, toggleFollowingProgress, getUsers
} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Loader/Preloader';

export class UsersC extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      { this.props.isFetching && <Preloader /> }
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        usersData={this.props.usersData}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersC)