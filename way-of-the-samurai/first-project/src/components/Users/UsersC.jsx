import './style.scss'
import axios from 'axios'
import { Component } from 'react';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow
} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Loader/Preloader';

export class UsersC extends Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        // this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        usersData={this.props.usersData}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersC)