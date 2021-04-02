import userPhoto from '../../assets/img/avatar.png';
import { Button } from '@material-ui/core';
import useStyles from './style';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  const classes = useStyles()
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []

  for (let i = 1; i <= pagesCount ; i += 1) {
    pages.push(i)
  }

  return (
    <div className="users-wrapper">
      <div className='users-pagination'>
        {
          pages.map((page) => {
            return <div
              className={props.currentPage === page
                ? 'users-pagination__item selected'
                : 'users-pagination__item'}
              onClick={() => props.onPageChange(page)}
              key={page}
            >{page}</div>
          })
        }
      </div>
      {
        props.usersData.map((user) => <div className="user" key={user.id}>
          <div className="user-panel">
            <div className="user-panel_logo">
              <NavLink to={`profile/${user.id}`}>
                <img src={ user.photos.small ? user.photos.small : userPhoto } alt='' />
              </NavLink>
            </div>
            <div className="user-panel_button">
              {
                user.followed ?
                  <Button
                    className={classes.root}
                    variant="contained"
                    color="primary"
                    disabled={props.followingInProgress.some((id) => id === user.id)}
                    onClick={() => {props.unfollow(user.id)}}
                  >Unfollow</Button> :
                  <Button
                    className={classes.root}
                    variant="contained"
                    color="primary"
                    disabled={props.followingInProgress.some((id) => id === user.id)}
                    onClick={() => {props.follow(user.id)}}
                  >Follow</Button>
              }
            </div>
          </div>
          <div className="user-description">
            <div className="user-about">
              <div>{user.name}</div>
              <div>{"user.description"}</div>
            </div>
            <div className="user-location">
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Users