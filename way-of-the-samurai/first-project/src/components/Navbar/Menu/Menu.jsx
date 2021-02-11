import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from '@material-ui/icons/Explore'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PersonIcon from '@material-ui/icons/Person'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        <li className="menu-wrapper--item">
          <NavLink to='/home'><HomeIcon/>Home</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/explore'><ExploreIcon />Explore</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/notifications'><NotificationsNoneIcon />Notifications</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/messages'><MailOutlineIcon />Messages</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/bookmarks'><BookmarkBorderIcon />Bookmarks</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/lists'><ListAltIcon />Lists</NavLink>
        </li>
        <li className="menu-wrapper--item">
          <NavLink to='/profile'><PersonIcon />Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu