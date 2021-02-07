import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        <li className="menu-wrapper--item"><a href='#'><HomeIcon/>Home</a></li>
        <li className="menu-wrapper--item"><a href='#'><ExploreIcon />Explore</a></li>
        <li className="menu-wrapper--item"><a href='#'><NotificationsNoneIcon />Notifications</a></li>
        <li className="menu-wrapper--item"><a href='#'><MailOutlineIcon />Messages</a></li>
        <li className="menu-wrapper--item"><a href='#'><BookmarkBorderIcon />Bookmarks</a></li>
        <li className="menu-wrapper--item"><a href='#'><ListAltIcon />Lists</a></li>
        <li className="menu-wrapper--item"><a className="active" href='#'><PersonIcon />Profile</a></li>
      </ul>
    </nav>
  )
}

export default Menu