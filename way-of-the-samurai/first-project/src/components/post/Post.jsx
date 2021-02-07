import { Avatar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import avatar from '../../assets/img/avatar.svg'
import post from '../../assets/img/post.svg'
import useStyles from './style';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const Post = () => {
  const classes = useStyles();

  return (
    <div className='post'>
      <div className='post-user'>
        <Avatar alt='post-user_avatar' src={avatar} />
        <div className='post-user_title'>Northwest Agency</div>
        <div className='post-user_name'>@NorthwestAgency</div>
      </div>
      <div className='post-content'>
        <img src={post} alt='post' />
      </div>
      <BottomNavigation
        className={classes.root}
      >
        <BottomNavigationAction icon={<ChatBubbleOutlineIcon />} />
        <BottomNavigationAction icon={<RepeatIcon />} />
        <BottomNavigationAction icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction icon={<ShareIcon />} />
        <BottomNavigationAction icon={<EqualizerIcon />} />
      </BottomNavigation>
    </div>
  )
}

export default Post